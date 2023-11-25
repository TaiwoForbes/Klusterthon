import React, { useState } from "react";
import bank from "../assets/bank.png";
import back from "../assets/back.png";
import forward from "../assets/forward.png";
import cancel from "../assets/cancel.png";
import { Link } from "react-router-dom";

const FundWallet = () => {
  const [inView, setInView] = useState(false);
  return (
    <div className="py-[2rem] px-[1rem] ">
        
      {!inView &&
          <>
      <div className="flex items-center gap-[8rem]  mb-[3rem]">
        <Link to='..'>
        <img src={back} alt="" className="" />
        </Link>
        <h1 className="text-center font-[500] text-[20px]">Fund Wallet</h1>
      </div>
      <button></button>
      <div className="flex items-center justify-between ">
        <div className="text-[12px] flex items-center gap-2">
          <img src={bank} alt="" className="w-[22.13px] h-[17px]" />
          <div className="flex flex-col">
            <h1>Bank Transfer</h1>
            <p>Transfer to your virtual account number</p>
          </div>
        </div>
        <div>
          <button onClick={()=> setInView(true)}>
            <img src={forward} alt="" />
          </button >
        </div>
      </div></>}

     {inView && <div className=" ">
        <div className="flex items-center gap-[2rem]  mb-[2rem]">
          <button onClick={()=>setInView(false)}>

          <img
            src={cancel}
            alt=""
            className="bg-[#C4C1C1] p-[10px] rounded-[50px]"
          />
          </button>
          <h1 className="text-center font-[500] text-[20px]">
            Funding with Bank transfer
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-2 border-black pb-[5px] ">
          <p>Duration</p>
          <p>5 minutes</p>
        </div>
        <div className="flex justify-between items-center  pt-[5px] ">
          <p>Funding unit</p>
          <p> None</p>
        </div>
        <Link to='/bankTransfer'>
        <button className="bg-[#850586] py w-[100%] py-[15px] px-[48px] rounded-[15px] text-white mt-[1rem] text-[16px] font-[500]">
          Continue
        </button>
        </Link>
      </div>}
    </div>
  );
};

export default FundWallet;
