import React from "react";
import back from "../assets/back.png";
import copy from "../assets/copy.png";
import { Link } from "react-router-dom";

const BankTransfer = () => {
  return (
    <div className="py-[2rem] px-[1rem]">
      <div className="flex items-center gap-[6rem]  mb-[3rem]">
        <Link to="..">
          <img src={back} alt="" className="" />
        </Link>
        <h1 className="text-center font-[500] text-[20px]">Bank Transfer</h1>
      </div>

      <p className="text-center text-[12px] mt-[5rem]">Make a transfer to your Bridge account number below and your account will be funded immediately</p>

      <div className="flex justify-between mt-[4rem]">
        <div className="font-[500]" >
            <h1 className=" text-[#850586]">Bridge</h1>
            <p>2085651843</p>
        </div>
        <img src={copy} alt="" />
      </div>

      <Link to='/bankTransfer'>
        <button className="bg-[#850586]  py w-[100%] py-[15px] px-[48px] rounded-[15px] text-white mt-[5rem] text-[16px] font-[500]">
          Done
        </button>
        </Link>
    </div>
  );
};

export default BankTransfer;
