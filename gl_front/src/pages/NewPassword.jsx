import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Alert from "../components/Alert";
import clientAxios from "../config/axios";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const params = useParams();
  const [alert, setAlert] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModify, setPasswordModify] = useState(false);

  const { token } = params;
  //console.log(params);
  useEffect(() => {
    const compToken = async () => {
      try {
        await clientAxios(`/users/reset-password/${token}`);
        setAlert({
          msg: "Enter your new password",
          error: false,
        });
        setTokenValido(true);
      } catch (error) {
        setAlert({
          msg: "There was a problem with the connection.",
          error: true,
        });
      }
    };
    compToken();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setAlert({
        msg: "The password is too short, add at least 6 characters.",
        error: true,
      });
      return;
    }
    try {
      const url = `/users/reset-password/${token}`;
      const { data } = await clientAxios.post(url, { password });

      setAlert({
        msg: data.msg,
        error: false,
      });
      setPasswordModify(true);
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };
  const { msg } = alert;
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-3xl lg:text-6xl">
          Reset your password and gain access to win...
        </h1>
      </div>
      <div className="mt-5 lg:mt-10 shadow-lg lg:shadow-sm px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alert={alert} />}
        {tokenValido && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-600 block text-xs lg:text-base font-bold">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="New Password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="New Password"
                className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
              />
            </form>
          </>
        )}
        {passwordModify && (
          <nav className="mt-10 lg:flex lg:justify-between">
            <Link
              to="/"
              className="block text-center my-5 text-gray-500 hover:text-indigo-600"
            >
              Login
            </Link>
          </nav>
        )}
      </div>
    </>
  );
};

export default NewPassword;
