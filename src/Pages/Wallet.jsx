import React from 'react'
import frame from '../assets/frame.png'
import { Link } from 'react-router-dom'
const Wallet = () => {
  return (
    <div>
      <div className=" py-[2rem] px-[1rem] ">
        
            
          <h1 className='text-center text-[20px] font-[500]'>Wallet</h1>
        
        
      </div>
      <div className="relative flex justify-center flex-col items-center">
        <img src={frame} alt="" className="w-[358px] h-[200px]" />
        <div className="absolute top-[30%] left-[40%] flex flex-col justify-center items-center">
          <p>Total Balance</p>
          <p className="font-[500] text-[25px]">#0.00</p>
        </div>
        <div className='w-full px-[1rem]'>
<Link to='fundWallet'>
          <button className="bg-[#850586] py w-[100%] py-[15px] px-[48px] rounded-[15px] text-white text-[12px]">
            Fund Wallect
          </button>
</Link>
        </div>
      </div>
      <div className='px-[1.2rem] pt-[4rem]'>
        <div className='flex  justify-between text-[14px]'>
            <p>Savings Option coming soon</p>
            <Link className='text-[#850586]'>10% per annum</Link>
        </div>
        
    </div>
    </div>
  )
}

export default Wallet