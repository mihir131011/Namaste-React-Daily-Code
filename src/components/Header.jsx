import { useState } from "react";
import { Link } from "react-router-dom";
export default HomePageHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
        alt=""
        className="logo"
      />
      <div className="header-list">
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <div style={{ width: "70px", marginRight: "50px" }}>
        {isLoggedIn ? (
          <button
            className="button-login-logout"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
            className="button-login-logout"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
