import { useState, useEffect, createContext } from "react";
import clientAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [load, setLoad] = useState(true);
  const [auth, setAuth] = useState({});
  useEffect(() => {
    const auntenUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoad(false);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await clientAxios("/users/profile", config);
        setAuth(data);
        //console.log(data);
        //console.log(auth);
      } catch (error) {
        console.log(error.response.data.msg);
        setAuth({});
      }
      setLoad(false);
    };

    auntenUser();
  }, []);
  const closedSesion = () => {
    localStorage.removeItem("token");
    setAuth({});
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, load, closedSesion }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
