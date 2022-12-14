import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
     init(textRef.current, {
       showCursor: true,
       backDelay: 1000,
       backSpeed:60,
       strings: ["Developer", "Designer", "Content Creator"],
     });
  },[]);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assests/harshitmehandiratta.jpeg" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Harshit Mehandiratta</h1>
          <h3>Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assests/down-arrow.png" alt="" />
        </a>
      </div>
    </div>
  );
}
