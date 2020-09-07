import React from "react";
import "./Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <div>
        <section className="projectsHdrContainer">
        <h1> Projects: Overview of some of my academic and personal projects
        </h1>
        </section>
        <section className="projectBorder projectList">
          <div className="projectsContainer">
          <h3>Recent Projects:</h3>  
          <section className="projectCard">
          </section>
          <section className="projectDesc">
          </section>
          <section className="projectTech">
          </section>
          </div>
        </section>
      </div>
    );
  }
}
