import Users from "../models/Users.js";
import generateJWT from "../helpers/generateJWT.js";
import generateId from "../helpers/generateId.js";
import emailRegister from "../helpers/emailRegister.js";
const register = async (req, res) => {
  const { email,names } = req.body;
  //prevent duplicate users
  const existUser = await Users.findOne({ email });
  if (existUser) {
    const error = new Error(`The user ${email} has already registered.`);
    return res.status(400).json({ msg: error.message });
  }
  try {
    //Save users
    const users = new Users(req.body);
    const usersSave = await users.save();
    // Send email to user
    emailRegister({email,names,token:usersSave.token});
    res.json(usersSave);
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  //Check if the user exists.
  const user = await Users.findOne({ email });
  if (!user) {
    const error = new Error(`User ${email} does not exist`);
    return res.status(403).json({ msg: error.message });
  }

  //Check if the user Confirmed.
  if (!user.confirmado) {
    const error = new Error(`Your user ${email} does not confirmed`);
    return res.status(403).json({ msg: error.message });
  }
  //Review User password
  if (await user.comproPassword(password)) {
    res.json({ token: generateJWT(user.id) });
  } else {
    const error = new Error(`Incorrect password`);
    return res.status(403).json({ msg: error.message });
  }
};
const profile = (req, res) => {
  const { users } = req;
  res.json({ Profile: users });
};
const confirm = async (req, res) => {
  const { token } = req.params;
  const userConfirm = await Users.findOne({ token });
  if (!userConfirm) {
    const error = new Error("Invalid token");
    return res.status(404).json({msg:error.message});
  }
  try {
    userConfirm.token = null;
    userConfirm.confirmado = true;
    await userConfirm.save();
    res.json({ msg: "User successfully confirmed" });
  } catch (error) {
    console.log(error);
  }
};
const resetPassword = async (req, res) => {
  const { email } = req.body;
  const existUser = await Users.findOne({ email });
  console.log(existUser);
  if (!existUser) {
    const error = new Error(
      "The e-mail address provided does not belong to a user."
    );
    return res.status(400).json({ msg: error.message });
  }
  try {
    existUser.token = generateId();
    await existUser.save();
    res.json({
      msg: `We've sent you an email with detailed instructions to ${existUser.email}`,
    });
  } catch (error) {
    console.log(error);
  }
};
const comToken = async (req, res) => {
  const { token } = req.params;
  const tokenValid = await Users.findOne({ token });
  if (tokenValid) {
    res.json({ msg: "Token is valid and the user exist" });
  } else {
    const error = new Error("Invalid token");
    return res.status(400).json({ msg: error.message });
  }
};
const newPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const users = await Users.findOne({ token });
  if (!users) {
    const error = new Error("There was an error.");
    return res.status(400).json({ msg: error.message });
  }
  try {
    users.token = null;
    users.password = password;
    await users.save();
    res.json({ msg: "The password has been changed correctly." });
  } catch (error) {
    console.log(error);
  }
};

export {
  register,
  login,
  profile,
  confirm,
  resetPassword,
  comToken,
  newPassword,
};
