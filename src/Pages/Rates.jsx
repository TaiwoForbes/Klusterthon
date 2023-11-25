import React, { useState } from "react";
import search from "../assets/search.png";
import USA from '../assets/usa.png'
import canada from '../assets/canada.png'
import southAfrica from '../assets/southAfrica.png'
import Russia from '../assets/Russia.png'
import newZealand from '../assets/newZealand.png'
import EU from '../assets/EU.png'
import UK from '../assets/UK.png'
import china from '../assets/china.png'
import { IoIosSearch } from "react-icons/io";


const Rates = () => {
  const [xRate, setXRate] = useState([
    {
      logo: USA,
      name: "United States (USD)",
      value: "1,120",
    },
    {
      logo: canada,
      name: "Canada (CAD)",
      value: "1,120",
    },
    {
      logo: EU,
      name: "Euro zone (EUR)",
      value: "1,120",
    },
    {
      logo: china,
      name: "China (CNY)",
      value: "1,120",
    },
    {
      logo: UK,
      name: "United Kingdom (GBP)",
      value: "1,120",
    },
    {
      logo: southAfrica,
      name: "South Africa (ZAR)",
      value: "1,120",
    },
    {
      logo: Russia,
      name: "Russia (RUS)",
      value: "1,120",
    },
   
  ]);
  return (
    <div className="px-[1rem] py-[2rem]  h-screen">
      <div>
        <h1 className="font-[500] text-[20px] text-center mb-[1rem]">Rates</h1>
      </div>
      <div className="relative">

      <input
        type="text"
        className="border-[1px] mb-[1rem] border-[#C4C1C1] w-full rounded-[20px] p-[10px]"
      />
      <div className="absolute top-3 text-[1.5rem] text-[#C4C1C1] right-2">
        <IoIosSearch/> 
      </div>
      </div>

      <p className="text-center mt-[1rem]">
        Current exchange rate based on your currency
      </p>
      <div className="mt-[3rem]">
        {xRate.map((country)=>{
            return (
                <div className="flex justify-between border-b-[1px] py-[1rem] mb-[2rem] border-[#C4C1C1]">
                    <div className="flex gap-2  items-center">
                        
                        <img src={country.logo} alt="" className="w-[24px] h-[24px] rounded-[50px]" />
                        <p>{country.name}</p>
                    </div>
                    <div>
                        <p>{country.value}</p>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Rates;
