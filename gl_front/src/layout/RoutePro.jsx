import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const RoutePro = () => {
  const { auth, load } = useAuth();
  console.log(auth);
  console.log(load);
  if (load) return "Load.....";
  return (
    <>
      <Header />
      <Outlet />
      {auth?._id  ? <Outlet /> : <Navigate to="/" />}
      <Footer />
    </>
  );
};

export default RoutePro;
