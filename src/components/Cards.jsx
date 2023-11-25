import React from 'react'
import bank from '../assets/bank.png'
import forward from '../assets/forward.png'

const Cards = ({text}) => {
  return (
    <div className='flex justify-between rounded-[15px] border-[1px] border-[#850586] py-[15px] px-[5px]'>
        <div className='flex justify-center items-center gap-2'>
        <img src={bank} alt="" className='w-[22px] h-[17px]' />
        <p>{text}</p>
        </div>
        <div>
            <img src={forward} alt="" />
        </div>
    </div>
  )
}

export default Cards