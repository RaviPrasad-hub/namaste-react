import { LOGO_URL } from "../utils/constants.js";
import { useState, useEffect } from "react";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className=" logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <button
        className="login-btn"
        onClick={() =>
          loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
        }
      >
        {loginBtn}
      </button>
    </div>
  );
};
export default Header;
