import React from 'react'
import { Link } from 'react-router-dom'

const Transaction = () => {
  return (
    <div className='px-[1.2rem] pt-[4rem]'>
        <div className='flex  justify-between text-[14px]'>
            <p>Transaction History</p>
            <Link className='text-[#850586]'>View All</Link>
        </div>
        <div>
            <p className='text-[14px] leading-[21px] mt-[2rem] text-[#A8A8A8] text-center'>You have no transactions, send money to a friend now.</p>
        </div>
    </div>
  )
}

export default Transaction