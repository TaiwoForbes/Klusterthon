import React, { useEffect, useState } from "react";
import currency from "../assets/currency.png";
import finance from "../assets/finance.png";
import moneyMap from "../assets/moneyMap.png";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);

  const images = [currency, moneyMap, finance];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index and loop back to the first image if necessary
      setCount((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once, like componentDidMount

  return (
    <div className="">
      <img src={images[count]} alt="" className="w-[500px] h-[400px] object-cover" />

      <div className="flex justify-center items-center flex-col absolute top-[65%] left-0 right-0">
        <p className="font-semibold text-[1.5rem]">Welcome to Bridge</p>
        <p>Instant cross-border transfers, anytime</p>
        <div className="flex mt-6 ">
          <div>
            <GoDotFill
              className={`${count === 0 ? "text-[#850586]" : "text-[#D9D9D9]"}`}
            />
          </div>
          <div
            className={`${count === 1 ? "text-[#850586]" : "text-[#D9D9D9]"}`}
          >
            <GoDotFill />
          </div>
          <div
            className={`${count === 2 ? "text-[#850586]" : "text-[#D9D9D9]"}`}
          >
            <GoDotFill />
          </div>
        </div>
        
      </div>
      <div className="flex  flex-col justify-center items-center absolute bottom-4 left-0 right-0">
     <Link to='/signup' className="bg-[#850586] text-center text-white py-[1rem] w-[90%] rounded-xl">
      <button className="">
          Get Started
        </button>
     </Link>
        <p>
          Already have an account?{" "}
          <span className="text-[[#850586]]"> Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
