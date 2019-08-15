import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./plinks.scss";
class Plinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section class="plinks">
        <div className="plink">
          <a href="#section1a" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: `rgba(${this.props.teamColor})` }}
            >
              <h2>01</h2>
            </Button>
          </a>
        </div>
        <div className="plink">
          <a href="#section2a" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: `rgba(${this.props.teamColor})` }}
            >
              <h2>02</h2>
            </Button>
          </a>
        </div>
        <div className="plink">
          <a href="#section3a" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: `rgba(${this.props.teamColor})` }}
            >
              <h2>03</h2>
            </Button>
          </a>
        </div>
        <div className="plink">
          <a href="#section4a" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: `rgba(${this.props.teamColor})` }}
            >
              <h2>04</h2>
            </Button>
          </a>
        </div>
        <div className="plink">
          <a href="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: `rgba(${this.props.teamColor})` }}
            >
              <h2>05</h2>
            </Button>
          </a>
        </div>
        <div className="scroll">
          <p className="vert">Scroll down</p>
          <i class="fas fa-arrow-down" />
        </div>
      </section>
    );
  }
}

export default Plinks;
