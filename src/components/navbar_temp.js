import "bootstrap/dist/css/bootstrap.css";

import ".././Styles/Styles.css";

import React, { useState, useEffect } from "react";

function navbar(props) {
  const {
    logged_in_email_val,
    setlogged_in_email_func,
    logged_in_firebase_val,
    setlogged_in_firebase_func,
    logged_in_name_val,
    setlogged_in_name_func,
    logged_in_photo_val,
    setlogged_in_photo_func,
    logged_in_auth_type_val,
    setlogged_in_auth_type_func,
    logged_in_token_val,
    setlogged_in_token_func,
    logged_in_phone_val,
    setlogged_in_phone_func,
  } = props;

  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(!showText);
  };

  return (
    <nav class="navbar fixed-top navbar-light navbar-container nav-bar-container">
      <div class="sub-nav-container nav-padding-left">
        <a class="nav-link nav-active nav-item" href="/">
          Home
        </a>
        <a class="nav-link nav-item" href="#">
          Hotels
        </a>
        <a class="nav-link nav-item" href="#">
          Favorites
        </a>
        <a class="nav-link nav-item" href="/dashboard">
          Dashboards
        </a>
        {showText && (
          <div>
            {logged_in_email_val ? (
              <span class="nav-link nav-item">{`Logged in as ${logged_in_email_val} : ${logged_in_name_val} : ${logged_in_phone_val} `}</span>
            ) : (
              <span class="nav-link nav-item">Not Logged In</span>
            )}
          </div>
        )}

        <div>
          {showText && logged_in_photo_val && (
            <img
              src={logged_in_photo_val}
              alt="Example image"
              style={{ width: "70px", height: "70px" }}
            />
          )}
        </div>
        <div class="nav-link nav-item">
          <button onClick={handleButtonClick}>Show Login</button>
        </div>
      </div>
      <div class="sub-nav-container">
        <a class="nav-link nav-item login-btn" href="/hotelreg">
          Hotel Reg.
        </a>
        <a class="nav-link nav-item login-btn" href="/profileup">
          Profile Update
        </a>

        <a class="nav-link nav-item login-btn" href="/login">
          Login
        </a>
        <a class="nav-link nav-item sign-up-btn" href="/signup">
          Register
        </a>
      </div>
    </nav>
  );
}

export default navbar;
