import './Navbar.css'
import Logo from '../../../Media/Logo/logo.png'

function NavBar(props) {
  return (
    <div className="navBar">
        <div className="navBarLogo">
            <img src ={Logo}  alt="logo" />
      </div>
      <div className = "navBarMenu">
        <div> <a href="home">home</a> </div>      
        <div> <a href="X">X</a> </div>
        <div> <a href="store">store</a> </div> 
        <div> <a href="login">login</a> </div> 
        <div> <a href="info">info</a> </div>       
            </div>
    </div>
  )
}

export default NavBar;