import jwt from "jsonwebtoken";
import Users from "../models/Users.js";
const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.users = await Users.findById(decoded.id).select(
        "-password -token -confirmado"
      );
      return next();
    } catch (error) {
      const errors = new Error("A token that is invalid.");
      return res.status(403).json({ msg: errors.message });
    }
  }
  if (!token) {
    const error = new Error("A token that is invalid or does not exist.");
    res.status(403).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
