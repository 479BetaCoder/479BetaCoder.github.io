import React from "react";
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <section className="cta-section border">
          <div className="inner-container">
            <h1>Interested in doing a project together?</h1>
            <a
              href="mailto:ravikumar.pilla479@gmail.com"
              className="cta-button"
            >
              Email Me <span className="arrow-right">→</span>
            </a>
          </div>
        </section>
        <footer className="border">
          <p>
            <b>
              Ravi Kumar &copy;{" "}
              <span id="footer-date">{new Date().getFullYear()}</span>
            </b>
          </p>
        </footer>
      </div>
    );
  }
}
