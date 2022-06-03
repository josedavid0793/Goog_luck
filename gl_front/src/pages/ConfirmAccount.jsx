import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import clientAxios from "../config/axios";

const ConfirmAccount = () => {
  const [accountconfirm, setAccountconfirm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({});
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const confirmaccount = async () => {
      try {
        const { data } = await clientAxios(`/users/confirm/${id}`);
        setAccountconfirm(true);
        setAlert({
          msg: "User successfully confirmed",
          error: false,
        });
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      }
      setLoading(false);
    };
    confirmaccount();
  }, []);
  console.log(params);

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-3xl lg:text-6xl">
          Confirm your account and start earning with Good Luck
        </h1>
      </div>
      <div className="mt-5 lg:mt-20 shadow-lg lg:shadow-sm px-5 py-10 rounded-xl bg-white">
        {!loading && <Alert alert={alert} />}
        {accountconfirm && (
          <Link
            to="/"
            className="block text-center my-5 text-gray-500 hover:text-indigo-600"
          >
            Login
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmAccount;
