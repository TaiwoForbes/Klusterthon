import React from 'react'
import done from '../assets/done.png'

const Finished = () => {
  return (
    <div className='absolute top-[40%] left-[40%]'>
        <div className='flex justify-center items-center flex-col'>

        <img src={done} alt="" />
        <h3 className='mt-3'>Done</h3>
        </div>
    </div>
  )
}

export default Finished