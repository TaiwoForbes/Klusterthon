import Home from "./Pages/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Finished from "./Pages/Finished"


function App() {
 

  return (
    <>
      <div className="">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          
          <Route path="/finished" element={<Finished/>}/>
        </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
