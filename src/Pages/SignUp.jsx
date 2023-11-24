import React, { useState } from "react";
import email from "../assets/email.png";
import contact from "../assets/contact.png";
import phone from "../assets/phone.png";
import security from "../assets/security.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [count, setCount] = useState(0);
  const [otp, setOpt] = useState(new Array(5).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOpt([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const Increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="px-[1rem] py-[0.5rem]">
      <form>
        {count === 0 && (
          <div className="">
            <Link to="/">
              <button className="text-left text-[#850586] font-semibold text-[17px] mt-[1rem] ml-[1rem] mb-[2rem]">
                Back
              </button>
            </Link>
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
              <button
                onClick={Increment}
                className="bg-[#850586]  mt-[5rem]   left-4 font-bold right-0 rounded-lg py-[1rem] text-white  "
              >
                Continue
              </button>
            </div>
          </div>
        )}
        {count === 1 && (
          <div className="">
            <button
              onClick={decrement}
              className="text-left text-[#850586] font-semibold text-[17px] mt-[1rem] ml-[1rem] mb-[2rem]"
            >
              Back
            </button>
            <img src={email} alt="" className="mb-4" />
            <h1 className="font-bold  text-[20px]">
              Just Make Sure You are safe
            </h1>
            <p className="font-[400] mb-4 text-[14px] text-[#797979]">
              This helps us verify you so you begin making transactions.
            </p>
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
                <p className="mt-[1.4rem] text-[#797979]">
                  Stay up to date with the latest news and resources delivered
                  directly to your inbox
                </p>
              </div>
              <button
                onClick={Increment}
                className="bg-[#850586]  mt-[5rem]   left-4 font-bold right-0 rounded-lg py-[1rem] text-white  "
              >
                Continue
              </button>
            </div>
          </div>
        )}
        {count === 2 && (
          <div className="">
            <button
              onClick={decrement}
              className="text-left text-[#850586] font-semibold text-[17px] mt-[1rem] ml-[1rem] mb-[2rem]"
            >
              Back
            </button>

            <img src={phone} alt="" className="mb-4" />
            <h1 className="font-bold   text-[20px] mb-4">You’re almost done</h1>
            <p className="font-[400] mb-4 text-[14px] text-[#797979]">
              This helps us verify you so you begin making transactions.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="number"
                placeholder="(+234) 806-123-4567"
                className="border-2 bg-gray-200 w-[100%] rounded-lg px-[0.5rem] py-[0.5rem]  outline-[#850586]"
              />

              <button
                onClick={Increment}
                className="bg-[#850586]  mt-[5rem]   left-4 font-bold right-0 rounded-lg py-[1rem] text-white  "
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {count === 3 && (
          <div className="">
            <button
              onClick={decrement}
              className="text-left text-[#850586] font-semibold text-[17px] mt-[1rem] ml-[1rem] mb-[2rem]"
            >
              Back
            </button>
            {otp.join("")}
            <div className="flex flex-col justify-center items-center">
              <img src={security} alt="" className="mb-4" />
              <h1 className="font-bold   text-[20px] mb-4">Enter Code</h1>
              <p className="font-[400]  text-[14px] text-[#797979]">
                Your temporary login code was sent to
              </p>
              <p className="mb-4">(234) 806-123-4567</p>
              <div className="flex  gap-2">
                {otp.map((data, index) => {
                  return (
                    <input
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                      className="border-2 text-black text-center bg-gray-200 w-[100%] rounded-lg px-[0.5rem] py-[0.5rem]  outline-[#850586]"
                    />
                  );
                })}
              </div>
              <button
                onClick={Increment}
                className="bg-[#850586] w-full  mt-[5rem]   left-4 font-bold right-0 rounded-lg py-[1rem] text-white  "
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUp;
