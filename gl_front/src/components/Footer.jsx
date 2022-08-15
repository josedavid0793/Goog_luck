import React from "react";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import whatsapp from "../images/whatsapp.png";

const Footer = () => {
  return (
    <footer className="py-10 bg-slate-300 h-40 items-center w-full block relative">
      <div className="bg-slate-200 w-80 h-16 ml-[42%] flex justify-around items-center">
        <div className="flex justify-around items-center">
          <img src={facebook} class="social-footer img-1-sf" alt="..." />
          <img src={instagram} class="social-footer img-1-sf" alt="..." />
          <img src={whatsapp} class="social-footer" alt="..." />
        </div>
      </div>
      <div className="items-center">
          <p className="text-left font-bold ml-[43%] mt-1">North Computer 2022 || Good Luck</p>
      </div>
    </footer>
  );
};

export default Footer;
