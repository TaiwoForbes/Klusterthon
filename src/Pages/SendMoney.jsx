import React from 'react'
import back from '../assets/back.png'
import bank from '../assets/bank.png'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'

const SendMoney = () => {
  return (
    <div className='px-[1rem] py-[2rem]'>
         <div className="flex items-center gap-[7rem]  mb-[3rem]">
        <Link to="/homepage">
          <img src={back} alt="" className="" />
        </Link>
        <h1 className="text-center font-[500] text-[20px]">Send Money</h1>
      </div>
      <div className='flex flex-col gap-5 mt-[6rem]'>
         <Link>
        <Cards text='Create new beneficiary'/>
      </Link>
      <Link>
        <Cards text='Send to saved Beneficiary'/>
      </Link>
      <Link to='/sendToUser'>
        <Cards text='Send money to user'/>
      </Link>
      </div>
    </div>
  )
}

export default SendMoney