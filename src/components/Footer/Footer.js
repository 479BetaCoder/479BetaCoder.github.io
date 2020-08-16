import React from "react";

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
        <footer class="border">
          <p>
            <bold>
              Ravi Kumar &copy;{" "}
              <span id="footer-date">{new Date().getFullYear()}</span>
            </bold>
          </p>
        </footer>
      </div>
    );
  }
}
