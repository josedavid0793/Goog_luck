import React from "react";
import luck from "../images/luck.jpg";


const Dashboard = () => {
  return (
    <div className="container mx-auto mb-8 flex justify-between grid-rows-2 m-auto w-full">
      <div className="mt-5 mr-4 lg:mt-20  px-5 py-10 rounded-xl bg-transparent w-3/5">
        <img src={luck} />
      </div>
      <div className="w-2/5  ml-0 left-0 text-center">
        <h4 className="text-gray font-black text-xs lg:text-lg mt-32">
          INNOVATING TRADITION
        </h4>
        <p className="text-center mt-8 mb-3">
          Aimed at evolving the traditional raffle to the digital era, with an
          easy and interactive user experience.</p> {"     "}

          <p>No matter the place or time, you
          can participate from your computer, cell phone or tablet and win great
          prizes.</p>

          <button className="mt-40 bg-violet-500 w-32 h-10 rounded-full" type="button">Play</button>
        
      </div>
    </div>
  );
};

export default Dashboard;
