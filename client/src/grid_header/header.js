import React from "react";
import "../grid_header/header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { navState: false };
  }

  render() {
    return (
      <React.Fragment>
        <section
          className="hero"
          style={{
            background: `url("${this.props.playerPic}") no-repeat center center`
          }}
        >
          <div
            className="hero-overlay"
            style={{
              background: `rgba(${this.props.teamColor}, .5)`,
              borderRight: `1px solid rgba(${this.props.teamColor}, 1)`
            }}
          />
          <div
            className="hero-overlay2"
            style={{
              background: `rgba(${
                this.props.secondaryColor
                  ? this.props.secondaryColor
                  : this.props.teamColor
              }, .5)`
            }}
          />
          <h1 className="title">
            {/**Only <span>t</span>
            he bes<span>t</span> */}
            {this.props.playerName}
          </h1>
          <div
            className="hero-sm-img"
            style={{
              background: `rgba(${this.props.teamColor}, .5)`,
              borderLeft: `2px solid rgba(${this.props.teamColor}, 1)`,
              borderTop: `2px solid rgba(${this.props.teamColor}, 1)`,
              borderBottom: `2px solid rgba(${this.props.teamColor}, 1)`
            }}
          >
            <div>
              <p>{this.props.shortBio}</p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
