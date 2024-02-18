import "./HeroImage.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
const HeroImage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImage" />
            </div> 
            <div className="content">
                <p>HI, I AM A FREELANCER</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/projects" className="btn">Projects</Link>
                    <Link to ="/contact" className="btn btn-light"> Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroImage;