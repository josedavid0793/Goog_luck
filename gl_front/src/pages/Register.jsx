import { React, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import clientAxios from "../config/axios";

const Register = () => {
  const [names, setNames] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordrepeat, setPasswordrepeat] = useState("");
  const [phone, setPhone] = useState("");
  const [documenttype, setDocumenttype] = useState("");
  const [documentnumber, setDocumentnumber] = useState("");

  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      [
        names,
        lastname,
        email,
        password,
        passwordrepeat,
        phone,
        documenttype,
        documentnumber,
      ].includes("")
    ) {
      setAlert({ msg: "There are empty fields", error: true });
      return;
    }
    if (password !== passwordrepeat) {
      setAlert({ msg: "Passwords are different", error: true });
      return;
    }
    if (password.length < 6) {
      setAlert({
        msg: "The password is too short, add at least 6 characters.",
        error: true,
      });
      return;
    }
    setAlert({});
    //Create user via API...
    try {
      await clientAxios.post(`/users`, {
        names,
        lastname,
        email,
        password,
        passwordrepeat,
        phone,
        documenttype,
        documentnumber,
      });
      setAlert({
        msg: `The user ${email} has been successfully registered, check your email`,
        error: false,
      });
      setInterval("location.reload()", 10000);
      //console.log(resp);
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
      setInterval("location.reload()", 10000);
      //console.log(error);
    }
  };
  const { msg } = alert;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-3xl lg:text-6xl">
          Create an account and you'll be a winner...
        </h1>
      </div>
      <div className="mt-5 lg:mt-10 shadow-lg lg:shadow-sm px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alert={alert} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xs lg:text-base font-bold">
              Names
            </label>
            <input
              type="text"
              placeholder="Name"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={names}
              onChange={(e) => setNames(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xs lg:text-base font-bold">
              Lastname
            </label>
            <input
              type="text"
              placeholder="Lastname"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xs lg:text-base font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xs lg:text-base font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xs lg:text-base font-bold">
              Password Repeat
            </label>
            <input
              type="password"
              placeholder="Password Repeat"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={passwordrepeat}
              onChange={(e) => setPasswordrepeat(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xs lg:text-base font-bold">
              Phone
            </label>
            <input
              type="number"
              placeholder="Phone"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xs lg:text-base font-bold">
              Type Document
            </label>
            <select
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={documenttype}
              onChange={(e) => setDocumenttype(e.target.value)}
            >
              <option>C.C</option>
              <option>C.E</option>
              <option>Passport</option>
            </select>
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xs lg:text-base font-bold">
              Number Document
            </label>
            <input
              type="number"
              placeholder="Number Document"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={documentnumber}
              onChange={(e) => setDocumentnumber(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Register"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            to="/"
            className="block text-center my-5 text-gray-500 hover:text-indigo-600"
          >
            Do you have an account? Login
          </Link>
          <Link
            to="/forgetpassword"
            className="block text-center my-5 text-gray-500 hover:text-indigo-600"
          >
            Forgot your password?
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Register;
