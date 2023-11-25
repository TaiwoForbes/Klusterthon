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
    <div>
      <div>
        <h1 className="font-[500] text-[20px] text-center">Rates</h1>
      </div>
      <input
        type="text"
        className="border-[1px] border-[#C4C1C1] w-full rounded-[20px] p-[10px]"
      />

      <p className="text-center">
        Current exchange rate based on your currency
      </p>
    </div>
  );
};

export default Rates;
