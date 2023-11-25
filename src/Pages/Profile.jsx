import React from 'react'
import avatar from '../assets/avatar.png'
import edit from '../assets/edit.png'
import forward from '../assets/forward.png'

const Profile = () => {
  return (

    
    <div className='py-[2rem] px-[1rem] w-full'>
      <div className='flex flex-col  gap-4 justify-center items-center'>
        <h1 className='font-[500] text-[20px] '>Profile</h1>
        <div>
          <img src={avatar} alt="" />
        </div>
        <div className='flex justify-center items-center gap-2'>

        <p className='mb-[1rem]'>Debra Anyanwu</p>
          <img src={edit} alt="" className='w-[16px] h-[16px]' />
        </div>
      </div>

      <h1 className='text-[20px] text-[#C4C1C1] mb-[1rem]'>PROFILE</h1>

      <div >
        <div className='flex justify-between border-b-[1px] border-[#C4C1C1] py-[1rem]' >
          <p>My Devices</p>
          <img src={forward} alt="" className='' />
        </div>
        <div className='flex justify-between border-b-[1px] border-[#C4C1C1] py-[1rem]' >
          <p>App Appearance</p>
          <img src={forward} alt="" />
        </div>
        <div className='flex justify-between border-b-[1px] border-[#C4C1C1] py-[1rem]' >
          <p>Beneficiary List</p>
          <img src={forward} alt="" />
        </div>
        <div className='flex justify-between border-b-[1px] border-[#C4C1C1] py-[1rem]' >
          <p>Beneficiary List</p>
          <img src={forward} alt="" />
        </div>
        <div className='flex justify-between border-b-[1px] border-[#C4C1C1] py-[1rem]' >
          <p>Account Statement</p>
          <img src={forward} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Profile