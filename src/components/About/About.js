import React from "react";

export default class About extends React.Component {
  render() {
    return (
        <div className="content">
        <section className="inner-container hero">
        <h1>
        Hello, my name is Ravi Kumar. I am a Full Stack Developer living in
        Boston, MA.
        </h1>
        </section>
        <section className="outer-container space-bottom">
        <img src={require("../../assets/tempImage.png")} alt="Ravi Kumar"></img>
        </section>
        <section className="inner-container space-bottom">
        <h3>About:</h3>
        <p>
        I am currently a graduate student at Northeastern University
        {/* <a href="https://godaddy.com" rel="noopener" target="_blank" className="yellow">GoDaddy</a>, which is where my passion for design and development converge. See my
        previous work history on
        <a href="https://www.linkedin.com/in/benjaminadam/" className="yellow" target="_blank" rel="noopener">LinkedIn</a>. Outside of work I have a beautiful wife and cat (obviously). I am also
        working on a few side projects including
        <a href="https://investmentcalculator.io/" target="_blank" rel="noopener" className="yellow">Investment Calculator</a>
        (a simple tool to teach people about investing) and
        <a href="https://dayofthedead.holiday/" target="_blank" rel="noopener" className="yellow">
        dayofthedead.holiday</a>. Currently I am not accepting freelance work, but I'd love to get coffee
        and get to know you, so don’t hesitate to get in touch.
        */}
        </p> 
        <h3>Services:</h3>
        <h4>Front End Development</h4>
        <p>
       {` Front End Development is building out the visual components of a website.
        Using HTML, CSS , and Javascript, I build fast, interactive websites.`}
        </p>
        <h4>Back End Development</h4>
        <p>
           {`Need to write`} 
        </p>
        </section>
        <section className="cta-section border">
        <div className="inner-container">
        <h1>Interested in doing a project together?</h1>
        <a href="mailto:ravikumar.pilla479@gmail.com" className="cta-button">Email Me <span className="arrow-right">→</span></a>
        </div>
        </section>
        </div>
    );
  }
}
