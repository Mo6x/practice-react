import React from "react";
import '../Navbar/navbar.css';




export const Navbar = () => {
  return (
      <div className="Navbar">
            <ul>
              <a href='#' className='footer__logo'>Christ-Moses</a>
              <li>Home</li>
              <li>Contact</li>
              <li>SignUp</li>
              <li>Login</li>
          </ul>
    </div>

  )
}


export default Navbar;