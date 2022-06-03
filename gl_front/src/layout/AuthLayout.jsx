import React from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto md:grid md:grid-cols-2 mt-5 md:mt-15 gap-12 p-5 items-center">
        <Outlet />
      </main>
      <Dashboard />
      <Footer />
    </>
  );
};

export default AuthLayout;
