import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Alert from "../components/Alert";
import clientAxios from "../config/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});
  const {setAuth} =useAuth();
  const navigate =useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if([email,password].includes('')){
      setAlert({
        msg:'All fields are required',
        error:true,
      })
      return
    }
    try {
      const {data}=await clientAxios.post('/users/login',{email,password});
      localStorage.setItem('token',data.token);
      setAuth(data);
      navigate('/home');
      //console.log(data.token);
    } catch (error) {
      setAlert({
        msg:error.response.data.msg,
        error:true,
      })
    }
  }

  const { msg } = alert;
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-3xl lg:text-6xl">
          Become a winner by logging in.
        </h1>
      </div>
      <div className="mt-5 lg:mt-20 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alert={alert} />}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xs lg:text-base font-bold">
              Email
            </label>
            <input
              type="text"
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
          <input
            type="submit"
            value="Login"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            to="/register"
            className="block text-center my-5 text-gray-500 hover:text-indigo-600"
          >
            You don't have a user account yet? Register
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

export default Login;
