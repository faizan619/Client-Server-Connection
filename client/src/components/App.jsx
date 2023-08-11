import Conract from "./screen/Conract"
import About from "./screen/About"
import HomePage from "./screen/HomePage"
import Navbar from "./screen/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Error from "./screen/Error"
import Login from "./screen/Login"
import Register from "./screen/Register"
import Logout from "./screen/Logout"


function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Conract/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App