import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import "./Styles/Styles.css";

// import MyNavbar from "./components/navbar";
import MyNavbar from "./components/navbar_temp";
import Footer from "./components/Footer";

import Profileupdate from "./components/Profileupdate";

function Success(props) {
  const navigate = useNavigate();

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
  return (
    <div>
      <MyNavbar {...props} />

      <div className="ex_profile_up">
        <Profileupdate {...props} />
      </div>

      <Footer />
    </div>
  );
}

export default Success;
