import logo from "../assets/logo1.png";

import "../styles/logo.css";

function Logo() {
  return (
    <div className="logo_container">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
