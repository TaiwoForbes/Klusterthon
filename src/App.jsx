import Home from "./Pages/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Finished from "./Pages/Finished"
import LayOut from "./Pages/LayOut"
import HomePage from "./Pages/HomePage"
import Wallet from "./Pages/Wallet"
import FundWallet from "./Pages/FundWallet"
import BankTransfer from "./Pages/BankTransfer"


function App() {
 

  return (
    <>
      <div className="">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          
          <Route path="/finished" element={<Finished/>}/>
          <Route path="homepage" element={<LayOut/>}>
            <Route index element={<HomePage/>}/>
           
          </Route>
          <Route path="wallet"  element={<LayOut/>}>
            
            <Route index element={<Wallet/>}/>
            <Route  path="fundWallet" element={<FundWallet/>}/>
            
          </Route>
          <Route  element={<LayOut/>}>
            
            <Route  path="bankTransfer" element={<BankTransfer/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
