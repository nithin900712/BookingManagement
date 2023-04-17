import "../Styles/Styles.css";
import { MdDashboard } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { BsFillBagFill } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";

export default function MenuBar() {
  return (
    <div class="poppins">
      <div class="user-details">
        <div>
          <HiUserCircle size="60" />
        </div>
        <div>shyam Makwana</div>
        <div>shyam@gmail.com</div>
      </div>
      <div class="options">
        <div class="opts active-opt">
          <MdDashboard size="20" />
          <div class="margin-left-3">Dashboard</div>
        </div>
        <div class="opts">
          <ImProfile size="20" />
          <div class="margin-left-3">View Profile</div>
        </div>
        <div class="opts">
          <BsFillBagFill size="20" />
          <div class="margin-left-3">Current Bookings</div>
        </div>
        <div class="opts">
          <MdWorkHistory size="20" />
          <div class="margin-left-3">Booking History</div>
        </div>
      </div>
    </div>
  );
}
