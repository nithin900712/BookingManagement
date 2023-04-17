import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Styles.css";
function navbar() {
  return (
    <nav class="navbar fixed-top navbar-light navbar-container nav-bar-container">
      <div class="sub-nav-container nav-padding-left">
        <a class="nav-link nav-active nav-item" href="#">
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
      </div>
      <div class="sub-nav-container">
        <a class="nav-link nav-item login-btn" href="#">
          Login
        </a>
        <a class="nav-link nav-item sign-up-btn" href="#">
          Register
        </a>
      </div>
    </nav>
  );
}

export default navbar;
