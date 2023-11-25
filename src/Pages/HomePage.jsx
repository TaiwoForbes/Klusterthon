import React from "react";
import avatar from "../assets/avatar.png";
import bell from "../assets/bell.png";
import frame from "../assets/frame.png";
import Transaction from "./Transcation";
const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between py-[2rem] px-[1rem] ">
        <div className="flex gap-2 justify-center items-center">
          <img src={avatar} alt="" className="w-[30px] h-[30px]" />
          <p>Hi Debra</p>
        </div>
        <div className="border-[1px] rounded-[5px] border-[#850586] py-[10px] px-[12px]">
          <img src={bell} alt="" className="w-[15px] h-[15px]" />
        </div>
      </div>
      <div className="relative flex justify-center flex-col items-center">
        <img src={frame} alt="" className="w-[358px] h-[200px]" />
        <div className="absolute top-[30%] left-[40%] flex flex-col justify-center items-center">
          <p>Total Balance</p>
          <p className="font-[500] text-[25px]">#0.00</p>
        </div>
        <div className="flex gap-[10px] justify-center items-center ">
          <button className="bg-white border-[1px] border-[#850586] py-[15px] px-[48px] rounded-[15px] text-[12px]">
            {" "}
            Send Money
          </button>
          <button className="bg-[#850586] py-[15px] px-[48px] rounded-[15px] text-white text-[12px]">
            Fund Wallect
          </button>
        </div>
      </div>
      <Transaction/>
    </div>
  );
};

export default HomePage;
