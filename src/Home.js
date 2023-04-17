import "./Styles/Styles.css";
import ExpenseItem from "./components/ExpenseItem";
import Search from "./components/Search";
import Banner from "./components/Banner";
// import Navbar from "./components/navbar";
import TempNavbar from "./components/navbar_temp";
import Footer from "./components/Footer";
import HotelInformation from "./components/HotelInformation";
import React, { useState, useEffect } from "react";
// import Dashboard from "./components/Dashboard";

export default function Home(props) {
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

  const [hotels, setHotels] = useState([]);
  const [hotelId, setHotelId] = useState(-1);
  const [initial, setInitial] = useState(true);
  const [hotel, setHotel] = useState({});
  const [searchParams, setSearchParams] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    rooms: "",
    guests: "",
  });

  let handleReturn = () => {
    setHotelId(-1);
    setHotel({});
  };

  let handleParamsChange = () => {};

  let getHotels = (obj) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://3.144.222.168:3000/api/users/search/?city=" +
        obj.destination +
        "&checkin=" +
        obj.checkIn +
        "&checkout=" +
        obj.checkOut +
        "&rooms=" +
        obj.rooms +
        "&guests=" +
        obj.guests +
        "",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setHotels(result.hotels);
      })
      .catch((error) => console.log("error", error));
  };

  let hotelSelect = (id) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://3.144.222.168:3000/api/users/hotel/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setHotel(result.hotels[0]);
        setHotelId(id);
      })
      .catch((error) => console.log("error", error));
  };

  let handleSearchChange = (obj) => {
    setSearchParams(obj);
    getHotels(obj);
    //console.log(obj);
  };

  useEffect(() => {
    if (initial) {
      let obj = {
        destination: "Bloomington",
        checkIn: "2023-03-26",
        checkOut: "2023-03-27",
        rooms: "1",
        guests: "1",
      };

      getHotels(obj);

      setInitial(false);
    }
  });
  if (hotelId == -1) {
    return (
      <div>
        {/* <Navbar /> */}
        <TempNavbar {...props} />
        <Banner />
        <div className="container">
          <Search
            onSearchChange={handleSearchChange}
            checkIn={searchParams.checkIn}
            checkOut={searchParams.checkOut}
            destination={searchParams.destination}
            rooms={searchParams.rooms}
            guests={searchParams.guests}
          ></Search>
          <div className="flexbox margin-5">
            {hotels.map((item) => {
              return (
                <ExpenseItem
                  id={item.id}
                  hotel={item.name}
                  rating="4.8"
                  img={item.url}
                  price={item.price}
                  beds={item.beds_per_room}
                  people={item.guests_per_room}
                  onHotelSelect={hotelSelect}
                ></ExpenseItem>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <TempNavbar {...props} />
        {/* <Navbar /> */}
        <HotelInformation
          hotel={hotel}
          rooms={searchParams.rooms}
          guests={searchParams.guests}
          checkIn={searchParams.checkIn}
          checkOut={searchParams.checkOut}
          onParamsChange={handleParamsChange}
        />
        <Footer />
      </div>
    );
  }
}
