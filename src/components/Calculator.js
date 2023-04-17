import "../Styles/Styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

export default function Calculator(props) {
  const [rooms, setRooms] = useState(parseInt(props.rooms));
  const [guests, setGuests] = useState(parseInt(props.guests));

  let handleDateChange = (event) => {};

  let handleControlClick = (event) => {
    if (event.currentTarget.dataset.btnfunc == "rooms-add") {
      setRooms(rooms + 1);
    } else if (event.currentTarget.dataset.btnfunc == "rooms-sub") {
      if (rooms > 0) {
        setRooms(rooms - 1);
      }
    } else if (event.currentTarget.dataset.btnfunc == "guests-add") {
      setGuests(guests + 1);
    } else if (event.currentTarget.dataset.btnfunc == "guests-sub") {
      if (rooms > 0) {
        setGuests(guests - 1);
      }
    }
  };

  return (
    <div class="calc-container poppins">
      <div class="mb-2 heading">Booking Details</div>
      <div class="flex mb-3">
        <div class="price margin-right-5 ">${props.price}</div>
        <div class="txt">/ Day</div>
      </div>
      <div class="booking mb-4">
        <div class="mb-2">Rooms</div>
        <div class="flex rooms">
          <AiOutlinePlus
            size="25"
            class="control-icon"
            data-btnfunc="rooms-add"
            onClick={handleControlClick}
          />
          <div class="control-number">
            <div>{rooms} Rooms</div>
          </div>
          <AiOutlineMinus
            size="25"
            class="control-icon"
            data-btnfunc="rooms-sub"
            onClick={handleControlClick}
          />
        </div>
      </div>
      <div class="booking mb-4">
        <div class="mb-2">Travelers</div>
        <div class="flex rooms">
          <AiOutlinePlus
            size="25"
            class="control-icon"
            data-btnfunc="guests-add"
            onClick={handleControlClick}
          />
          <div class="control-number">
            <div>{guests} Travelers</div>
          </div>
          <AiOutlineMinus
            size="25"
            class="control-icon"
            data-btnfunc="guests-sub"
            onClick={handleControlClick}
          />
        </div>
      </div>
      <div class="booking mb-4">
        <div class="flexbox">
          <div>
            <div>Check In</div>
            <input
              type="Date"
              placeholder="Check-out"
              onChange={handleDateChange}
              data-for="checkOut"
              value={props.checkIn}
              style={{ width: 150, marginLeft: 0 }}
            />
          </div>
          <div>
            <div>Check Out</div>
            <input
              type="Date"
              placeholder="Check-out"
              onChange={handleDateChange}
              data-for="checkOut"
              value={props.checkOut}
              style={{ width: 150, marginLeft: 0 }}
            />
          </div>
        </div>
      </div>
      <div class="price-details mb-2">
        You will pay <b>560$</b> For <b>2 Nights</b>
      </div>
      <div class="book-btn">Continue to Book</div>
    </div>
  );
}
