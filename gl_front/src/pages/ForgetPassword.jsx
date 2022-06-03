import { React, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import clientAxios from "../config/axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setAlert({ msg: "Email is required", error: true, });
      return;
    }
    try {
      const {data}=await clientAxios.post('/users/reset-password',{email});
      console.log(data);
      setAlert({msg:data.msg});
    } catch (error) {
      setAlert({msg:error.response.data.msg, error:true,});
    }
  };
  const { msg } = alert;
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-3xl lg:text-6xl">
          Regain access and continue to win prizes...
        </h1>
      </div>
      <div className="mt-5 lg:mt-20 shadow-lg lg:shadow-sm px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alert={alert} />}
        <form onSubmit={handleSubmit}>
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
          <input
            type="submit"
            value="Password recovery"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link to="/" className="block text-center my-5 text-gray-500">
            Do you have an account? Login
          </Link>
          <Link to="/register" className="block text-center my-5 text-gray-500">
            You don't have a user account yet? Register
          </Link>
        </nav>
      </div>
    </>
  );
};

export default ForgetPassword;
