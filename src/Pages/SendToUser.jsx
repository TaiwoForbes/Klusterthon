import React from "react";
import back from "../assets/back.png";
import { Link } from "react-router-dom";

const SendToUser = () => {
    const handleSubmit = (e)=>{
            e.preventDefault()
    }
  return (
    <div className="py-[2rem] px-[1rem]">
      <div className="flex items-center gap-[5rem]  mb-[2.3rem]">
        <Link to="/homepage/sendMoney">
          <img src={back} alt="" className="" />
        </Link>
        <h1 className="text-center font-[500] text-[20px]">
          Send money to user
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="font-500 text-[12px]  ">
          Enter the Bridge account number of the Recipient
        </label>
        <input
          type="text"
          className="bg-[#D9D9D9] px-[1rem] mt-[0.5rem] outline-[#850586] rounded-[14px] text-black font-[500] h-[60px] w-full mb-[2rem]"
        />
        <label className="font-500 text-[12px] ">Enter the amount (NGN)</label>
        <input
          type="text"
          className="bg-[#D9D9D9] px-[1rem] mt-[0.5rem] outline-[#850586] rounded-[14px] text-black font-[500] h-[60px] w-full mb-[2rem]"
        />
        <div className="flex flex-col">
          <label className="font-500 text-[12px] ">What Currency</label>
          <select
            name=""
            id=""
            className="bg-[#D9D9D9] px-[1rem] mt-[0.5rem] outline-[#850586] rounded-[14px] text-black font-[500] h-[60px] w-full mb-[2rem]"
          >
            <option value="">USD</option>
          </select>
        </div>
      <p className="text-[12px] mt-[2rem] font-[500] text-center text-[#ABB0BC]">
        Note: We will charge a 1% fee for this transaction
      </p>
      <button type="submit"  className="absolute bottom-2 bg-[#850586]  py w-[92%] py-[15px] px-[48px] rounded-[15px] font-[500] text-white text-[16px]">
        Verify
      </button>
      </form>

    </div>
  );
};

export default SendToUser;
