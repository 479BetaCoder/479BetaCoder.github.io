import React from "react";
import "./Projects.css";
import Slider from "infinite-react-carousel";
import * as constants from "../utils/constants";

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
  renderSliderForAOU(settings) {
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/AOU/landing.png")}
              alt="Landing"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/AOU/restaurant.png")}
              alt="Restaurant"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/AOU/grocery.png")}
              alt="Grocery"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/AOU/groceryOrdering.png")}
              alt="Grocery Order"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/AOU/bulkorder.png")}
              alt="Bulk Order"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/AOU/cart.png")}
              alt="Cart"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/AOU/confirm_order.png")}
              alt="Confirm Order"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/AOU/orderHistory.png")}
              alt="Order History"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/AOU/admin_dashboard.png")}
              alt="Admin Dashboard"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/AOU/offer.png")}
              alt="Offer"
            ></img>
          </div>
        </Slider>
      </div>
    );
  }
  renderSliderForMobileAutomata(settings) {
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/MobileAutomata/BrainsBrain.png")}
              alt="Brians Brain"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/MobileAutomata/DeadAlive.png")}
              alt="Dead Alive"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/MobileAutomata/goldWinner.png")}
              alt="Gold Winner"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/MobileAutomata/Lockme.png")}
              alt="Lock Me"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/MobileAutomata/topDown.png")}
              alt="Top Down"
            ></img>
          </div>
        </Slider>
      </div>
    );
  }

  renderSliderForChatter(settings) {
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/Chatter/SignUp.png")}
              alt="SignUp"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/Chatter/SignIn.png")}
              alt="SignIn"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/Chatter/Feed.png")}
              alt="Feed"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/Chatter/Posts.png")}
              alt="Posts"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/Chatter/Foul.png")}
              alt="Foul"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/Chatter/comments.png")}
              alt="Comments"
            ></img>
          </div>
          <div>
            <img
              className="projectShowCase"
              src={require("../../assets/Chatter/like.png")}
              alt="Like"
            ></img>
          </div>
        </Slider>
      </div>
    );
  }

  renderSliderForRecipeManagement(settings) {
    return (
      <div>
        <img
          className="projectShowCase"
          src={require("../../assets/RecipeManagement/backend.png")}
          alt="Recipe Management System"
        ></img>
      </div>
    );
  }

  renderProjectDetails(details) {
    return details.map((detail) => (
      <li className="detailItem" key={detail}>
        {detail}
      </li>
    ));
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
            <div>{this.renderSliderForChatter(sliderSettings)}</div>
            <div className="projectDescription">
              <h4>
                Design / Front End Development / Back End Development /
                Operations
              </h4>
              <p>
                <span className="projectName">Chatter</span> is a cloud native
                pwa developed using MERN stack inspired from Twitter
              </p>
              <ol className="detailsOrder">
                {this.renderProjectDetails(constants.chatterDetailsContent)}
              </ol>
              <a
                target="blank"
                href="https://github.com/479BetaCoder/chatter"
                className="btnSeeProject"
              >
                See Project<span className="arrow-right">→</span>
              </a>
            </div>
            <section className="projectBorder projectSpace"></section>
            <div>{this.renderSliderForQsqBoards(sliderSettings)}</div>
            <div className="projectDescription">
              <h4>Design / Front End Development / Back End Development</h4>
              <p>
                <span className="projectName">QSQ Boards</span> is a web
                application developed using MEAN stack for project management
                inspired from applications like Microsoft Azure DevOps and
                Monday.com
              </p>
              <ol className="detailsOrder">
                {this.renderProjectDetails(constants.qsqDetailsContent)}
              </ol>
              <a
                target="blank"
                href="https://github.com/479BetaCoder/QSQBoards"
                className="btnSeeProject"
              >
                See Project<span className="arrow-right">→</span>
              </a>
            </div>
            <section className="projectBorder projectSpace"></section>
            <div>{this.renderSliderForAOU(sliderSettings)}</div>
            <div className="projectDescription">
              <h4>Design / Front End Development / Back End Development</h4>
              <p>
                <span className="projectName">AOU</span> is a web application to
                facilitate brokerage of bulk orders. Developed using Spring MVC,
                Hibernate, J2EE, Maven, the application helps users to bulk
                order items from business around them (AOU - Around you).
                PinCode is used for searching businesses near the user.
              </p>
              <ol className="detailsOrder">
                {this.renderProjectDetails(constants.aouDetailsContent)}
              </ol>
              <a
                target="blank"
                href="https://github.com/479BetaCoder/AOU"
                className="btnSeeProject"
              >
                See Project<span className="arrow-right">→</span>
              </a>
            </div>
            <section className="projectBorder projectSpace"></section>
            <div>{this.renderSliderForRecipeManagement(sliderSettings)}</div>
            <div className="projectDescription">
              <h4>Back End Development / Cloud Native / CICD</h4>
              <p>
                <span className="projectName">Recipe Management System</span> is
                a cloud native backend application which runs an express server
                in NodeJS RTE and exposes REST endpoints for CRUD operations on
                recipes. The application uses AWS for cloud and Circle CI is
                used for continuous integration. Terraform is used as IAC for
                spinning up infrastructure. App was built on Ubuntu OS and
                CentOS was used for the EC2 instance.
              </p>
              <ol className="detailsOrder">
                {this.renderProjectDetails(constants.rmsDetailsContent)}
              </ol>
              <a
                target="blank"
                href="https://github.com/479BetaCoder/ccwebapp"
                className="btnSeeProject"
              >
                See Project<span className="arrow-right">→</span>
              </a>
            </div>
            <section className="projectBorder projectSpace"></section>
            <div>{this.renderSliderForMobileAutomata(sliderSettings)}</div>
            <div className="projectDescription">
              <h4>Design / Development</h4>
              <p>
                <span className="projectName">Custom Mobile Automata</span> is a
                Swing application using Java to simulate Mobile Automata.
                Consists of 5 algorithms which demonstrate 2D Cellular/Mobile
                Automata. Demonstrated Brian's Brain cellular automata which is
                a form of Game of Life except that the cells have 3 states.
              </p>
              <a
                target="blank"
                href="https://github.com/479BetaCoder/Cellular-Automata"
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
