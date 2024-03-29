import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick =() => setClick(!click);
  const[color, setColor] = useState(false);
  const changeColor =() =>{

// we will increase the value of the below if condition, when we will add additional
// contents under the HeroImage component in home page component. 
// because we do not have any content below for this reason we cannot scroll below.

    if(window.scrollY >=1){
        setColor(true);
    }else{
        setColor(false);
    }
  }
  window.addEventListener("scroll", changeColor);

    return (
        <div className={color? "header header-bg": "header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick = {handleClick}>
                {
                click? (<FaTimes size={30} style={{color: "#fff"}}></FaTimes>)
                :
                (<FaBars size={30} style={{color: "#fff"}}></FaBars>)
                }
                
            </div>
        </div>
    );
};

export default Navbar;