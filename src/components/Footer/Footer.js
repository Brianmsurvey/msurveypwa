import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.msurvey.co"
                >
                  mSurvey
                </a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.msurvey.co"
            >
              mSurvey
            </a>{" "}
            Audience Profiles Data Dashboard
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
