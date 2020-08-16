import React from "react";
import "./About.css";

export default class About extends React.Component {
  render() {
    return ( 
        <div className="aboutContainer">
        <img
          className="avatarContainer"
          src={require("../../assets/myAvatar.JPG")}
          alt="RK"
        ></img>
          <section>
            <label>{`About ME`}</label>
          </section>
        </div>
    );
  }
}
