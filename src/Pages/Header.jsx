import React from "react";
import { NavLink } from "react-router-dom";
import home from "../assets/home.png";
import wallet from "../assets/wallet.png";
import rates from "../assets/rates.png";
import avatar from "../assets/avatar.png";

const Header = () => {
  return (
    <div className="fixed bottom-0 w-full flex justify-evenly items-center bg-white  shadow-[0px_-4px_8px_2px_#00000025] py-[20px]  rounded-[10px]  ">
      <NavLink
        to="/homepage"
        className="flex flex-col justify-center items-center"
      >
        <img src={home} alt="" className="w-[30px]  h-[30px]" />
        <h1 className="text-[10px]">Home</h1>
      </NavLink>
      <NavLink
        to="/rates"
        className="flex flex-col justify-center items-center"
      >
        <img src={rates} alt="" className="w-[30px] h-[30px]"/>
        <p className="text-[10px]">Rate</p>
      </NavLink>
      <NavLink
        to="/wallet"
        className="flex flex-col justify-center items-center"
      >
        <img src={wallet} alt=""className="w-[30px] h-[30px]" />
        <p className="text-[10px]">Wallet</p>
      </NavLink>
      <NavLink to='/profile' className="flex flex-col justify-center items-center">
        <img src={avatar} alt="" className="w-[30px] h-[30px]" />
        <p className="text-[10px]">Profile</p>
      </NavLink>
    </div>
  );
};

export default Header;
