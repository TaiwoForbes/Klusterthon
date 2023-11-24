import React, { useState } from "react";
import email from "../assets/email.png";
import contact from "../assets/contact.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="px-[1rem] py-[0.5rem]">
      <Link to="/">
        <p className="text-left text-[#850586] mb-2">Back</p>
      </Link>
      <form>
        {count === 0 && (
          <div className="">
            <img src={contact} alt="" className="mb-4" />
            <h1 className="font-bold mb-4">Tell Us about yourself</h1>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="First name"
                className="border-2 bg-gray-200 w-[100%] rounded-lg px-[0.5rem] py-[0.5rem]  outline-[#850586]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border-2 bg-gray-200 w-[100%] rounded-lg px-[0.5rem] py-[0.5rem]  outline-[#850586]"
              />
              <input
                type="text"
                placeholder="Birthday(mm/dd/yy)"
                className="border-2 bg-gray-200 w-[100%] rounded-lg px-[0.5rem] py-[0.5rem]  outline-[#850586]"
              />
            </div>
          </div>
        )}
        {count === 1 && (
          <div className="">
            <img src={email} alt="" className="mb-4" />
            <h1 className="font-bold  text-[20px]">Just Make Sure You are safe</h1>
            <p className="font-[400] mb-4 text-[14px] text-[
#797979]">This helps us verify you so you begin making transactions.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="border-2 bg-gray-200 w-[100%] rounded-lg px-[0.5rem] py-[0.5rem]  outline-[#850586]"
              />
              <div className="flex gap-2 justify-center items-center ">

              <input
                type="checkbox"
                placeholder="Last name"
                className="border-2 w-[20px] h-[20px] bg-gray-200  rounded-lg px-[0.5rem] py-[0.5rem]  outline-[#850586]"
              />
              <p className="mt-[1.4rem] text-[
#797979]">Stay up to date with the latest news and resources delivered directly to your inbox</p>
              </div>
              
            </div>
          </div>
        )}
        {count === 2 && (
          <div className="">
            <img src={contact} alt="" className="mb-4" />
            <h1 className="font-bold mb-4">Tell Us about yourself</h1>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="First name"
                className="border-2 bg-gray-200 w-[100%] rounded-lg px-[0.5rem] py-[0.5rem]  outline-[#850586]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border-2 bg-gray-200 w-[100%] rounded-lg px-[0.5rem] py-[0.5rem]  outline-[#850586]"
              />
              <input
                type="text"
                placeholder="Birthday(mm/dd/yy)"
                className="border-2 bg-gray-200 w-[100%] rounded-lg px-[0.5rem] py-[0.5rem]  outline-[#850586]"
              />
            </div>
          </div>
        )}
      </form>
      <button
        onClick={Increment}
        className="bg-[#850586] absolute bottom-2 w-[92%] left-4 font-bold right-0 rounded-lg py-[1rem] text-white  "
      >
        Continue
      </button>
    </div>
  );
};

export default SignUp;
