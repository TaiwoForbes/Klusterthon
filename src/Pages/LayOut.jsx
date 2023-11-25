import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <>
    <div>
        <Header/>
    </div>
    <main>
        <Outlet/>
    </main>
    </>
    
  )
}

export default LayOut