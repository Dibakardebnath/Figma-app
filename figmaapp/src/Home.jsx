import React from "react";
import "./Home.css";
import navbar from "./Images/navbar.png";
import madeira from "./Images/madeira.png";
import group13 from "./Images/Group 13.svg";
import image19 from "./Images/image 19.png";
import redLine from "./Images/redLine.png";
import textLine from "./Images/textLine.png";
import group12 from "./Images/Group 12.png";
import why from "./Images/why-img.png";
import virtual from "./Images/virtual tour n stats.png";
import group23 from "./Images/Group 23.png";

import boxing from "./Images/Group 7.png";
import swimming from "./Images/Group 9.png";
import hourse from "./Images/Group 16.png";
import logo from "./Images/image 20.png";




const Home = () => {
  return (
    <div className="main-container">
    
    <div className="parent-nav-div">
    <nav className="nav-container">
        <a href="">INQUIRE</a>
        <a href="">APPLY</a>
        <a href="">SUPPORT US</a>
        <a href="">|</a>
        <a href="">PARENTS</a>
        <a href="">ALUMS</a>

      </nav>
    </div>


    <div className="second-main-container">

      <div className="text-container">
        <p>Our commitment to all-round development shines in diverse extracurricular activities.</p>
         <p className="text-2">(Our Students love that!)</p>
      </div>
       <img width={'600px'} src={boxing} alt="" />
       <img width={'600px'} src={swimming} alt="" />
       <img width={'10%'} src={logo} alt="" />
        <img width={'450px'} src={hourse} alt="" />
        <button className="button">SEE ALL ACTIVITIES </button>
      
    </div>

    <div className="third-container">
        <img width={"100%"} className="grp3-img" src={group13} alt="" />
        <img
          className="youtube-icon"
          src="https://static-00.iconduck.com/assets.00/youtube-icon-512x359-dyeyi1hm.png"
          alt=""
        />
      </div>


      <div className="girl-main-container">
        
        <div className="girl-first-container"><img width={'70%'} src={image19} alt="" /></div>
        <div className="girl-second-container">
          <h2 className="girl-h2">At Tula’s, we ask, “How can we make school better?”</h2>
          <p className="girl-p">Using the latest research on how girls learn best, we designed an innovative modular schedule, personalized for each student. Our girls are focused, not overwhelmed. “Girls Rule” isn’t just a saying here. Develop leadership skills, build compassion, gain responsibility, and prepare to change the world.</p>
          <button className="button">LEARN MORE</button>
        </div>
      </div>


      <div className="why-container">
        <img width={"100%"} src={why} alt="" />
      </div>
     
    </div>
  );
};

export default Home;
/*


 <div className="nav-container">
        <img className="nav-img" src={navbar} alt="" />
      </div>
      <div className="madeira-container">
        <img className="madeira-img" src={madeira} alt="" />
      </div>

      <div className="group3">
        <img width={"100%"} className="grp3-img" src={group13} alt="" />
        <img
          className="maskgroup-img"
          src="https://static-00.iconduck.com/assets.00/youtube-icon-512x359-dyeyi1hm.png"
          alt=""
        />
      </div>

      <div className="girlImg-main-container">
        <div className="girl-img">
          <img width={"100%"} src={image19} alt="" />
        </div>
        <div className="girl-second-container">
          <img width={"100%"} src={redLine} alt="" />
          <img width={"100%"} src={textLine} alt="" />
          <img
            className="girl-container-button"
            width={"50%"}
            src={group12}
            alt=""
          />
        </div>
      </div>

      <div className="why-container">
        <img width={"100%"} src={why} alt="" />
      </div>

      <div className="white-container">
        <img width={"100%"} src={virtual} alt="" />
      </div>

      <footer className="footer">
        <img width={"100%"} src={group23} alt="" />
      </footer>
*/