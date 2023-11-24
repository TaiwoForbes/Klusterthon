import Home from "./Pages/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignUp from "./Pages/SignUp"


function App() {
 

  return (
    <>
      <div className="">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
