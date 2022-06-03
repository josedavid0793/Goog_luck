import React from "react";

const Dashboard = () => {
  return (
    <div className="container flex justify-between items-center grid-rows-2 m-auto">
      <div className="mt-5 lg:mt-20 shadow-lg px-5 py-10 rounded-xl bg-white w-1/2"></div>
      <div className="w-1/2 bg-white ml-0 left-0 text-center">
        <h4 className="text-gray font-black text-xs lg:text-lg">
          INNOVATING TRADITION
        </h4>
        <p>
          Aimed at evolving the traditional raffle to the digital era, with an
          easy and interactive user experience.</p> {" "}

          <p>No matter the place or time, you
          can participate from your computer, cell phone or tablet and win great
          prizes.</p>
        
      </div>
    </div>
  );
};

export default Dashboard;
