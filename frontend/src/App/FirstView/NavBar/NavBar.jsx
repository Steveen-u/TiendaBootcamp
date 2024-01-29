import "./Navbar.css";
import Logo from "../../../Media/logo.png";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const navegate = useNavigate();

  const navigateto = (path) => {
    navegate(path);
  };
  return (
    <div className="navBar">
      <div className="navBarLogo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navBarMenu">
        <div>
          <a href="/" onClick={() => navigateto("/")}>home</a>
        </div>
        <div>
          <a href="X">X</a>
        </div>
        <div>
          <a href="store">store</a>
        </div>
        <div>
          <a href="login">login</a>
        </div>
        <div>
          <a href="info" onClick={() => navigateto("/info")}>
            info
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
