import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <div className="navbarContainer">
        <a href="/">CodoFile</a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Profile</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="btngroup">
          <NavLink to='/login'><button className="btn1 btn">Login</button></NavLink>
          <NavLink to='/register'><button className="btn2 btn">Register</button></NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar