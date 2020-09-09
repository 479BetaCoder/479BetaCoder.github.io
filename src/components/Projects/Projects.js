import React from "react";
import "./Projects.css";
import Slider from "infinite-react-carousel";

export default class Projects extends React.Component {
  renderSliderForQsqBoards(settings) {
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/QsqBoards/login.png")}
              alt="Login"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/QsqBoards/allProjects.png")}
              alt="All Projects"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/QsqBoards/projectOverview.png")}
              alt="Project Overview"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/QsqBoards/board.png")}
              alt="Project Board"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/QsqBoards/tasks.png")}
              alt="Tasks"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/QsqBoards/backlog.png")}
              alt="Project Backlog"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/QsqBoards/analytics.png")}
              alt="Project Analytics"
            ></img>
          </div>
        </Slider>
      </div>
    );
  }

  render() {
    const sliderSettings = {
      arrows: false,
      arrowsBlock: false,
      dots: true,
    };
    return (
      <div className="fade-in">
        <section className="projectsHdrContainer">
          <h1>
            {" "}
            Projects: Overview of some of my academic and personal projects
          </h1>
        </section>
        <section className="projectBorder projectList">
          <div className="projectsContainer">
            <h3>Recent Projects:</h3>
            <div>{this.renderSliderForQsqBoards(sliderSettings)}</div>
            <div className="projectDescription">
              <h4>Design / Front End Development / Back End Development</h4>
              <p>
                QSQ Boards is a web application developed using MEAN stack for
                project management inspired from applications like Microsoft
                Azure DevOps and Monday.com
              </p>
              <a
              target="blank"
          href="https://github.com/479BetaCoder/QSQBoards"
          className="btnSeeProject"
        >
          See Project<span className="arrow-right">→</span>
        </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
