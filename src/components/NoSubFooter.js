import "bootstrap/dist/css/bootstrap.css";
import ".././Styles/Styles.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

function NoSubFooter(props) {
  return (
    <div className="nfooter-container">
      <div className="nfooter">
        <div className="nfooter-section">
          <img
            className="nfooter-logo"
            src="https://i.ibb.co/QrkH9Xv/logo.png"
            alt="logo"
            border="0"
          />
          <div className="space-between icons">
            <BsInstagram size="10" />
            <BsFacebook size="10" />
            <BsTwitter size="10" />
            <BsYoutube size="10" />
          </div>
        </div>
        <div className="nfooter-section flex-start">
          <div className="nfooter-text">
            <b>Our Destinations</b>
            <div className="color-blue">Indiana</div>
            <div className="color-blue">Massachusetts</div>
            <div className="color-blue">California</div>
            <div className="color-blue">Illinois</div>
          </div>
        </div>
        <div className="nfooter-section flex-start">
          <div className="nfooter-text">
            <b>For Beginners</b>
            <div className="color-blue">New Account</div>
            <div className="color-blue">Start Booking a room</div>
            <div className="color-blue">Explore hotels</div>
          </div>
        </div>

        <div className="nfooter-section flex-start">
          <div className="nfooter-text">
            <b>Our Destinations</b>
            <div className="color-blue">Our Careers</div>
            <div className="color-blue">Privacy</div>
            <div className="color-blue">Terms & Conditions</div>
          </div>
        </div>
        <div className="nfooter-section flex-start">
          <div className="nfooter-text">
            <b>Connect</b>
            <div className="color-blue">Support@bookeasy.com</div>
            <div className="color-blue">812-999-9999</div>
            <div className="color-blue">Bloomington, Indiana</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoSubFooter;
