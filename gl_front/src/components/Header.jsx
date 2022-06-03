import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { closedSesion } = useAuth();
  return (
    <header className="py-10 bg-indigo-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-white font-bold text-2xl">Good Luck</h1>
        <nav className="flex flex-col items-center md:flex-row gap-4">
          <Link to="/home" className="text-white text-xl">
            Home
          </Link>
          <Link to="/raffles" className="text-white text-xl">
            Raffles
          </Link>
          <Link to="/winners" className="text-white text-xl">
            Winners
          </Link>
          <Link to="/rules" className="text-white text-xl">
            Rules
          </Link>
          <Link to="/contacts" className="text-white text-xl">
            Contacts
          </Link>
          <button
            type="button"
            className="text-white text-xl"
            onClick={closedSesion}
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
