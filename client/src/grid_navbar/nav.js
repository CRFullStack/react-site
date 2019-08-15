import React from "react";
import "../grid_navbar/navbar.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { navState: false };
  }
  openNav = () => {
    this.refs.overlay.style.width = "100%";
    for (
      let pTag = 0;
      pTag < this.refs.overlayContent.getElementsByTagName("p").length;
      pTag++
    ) {
      this.refs.overlayContent.getElementsByTagName("p")[pTag].style.display =
        "inline";
    }
  };
  closeNav = () => {
    this.refs.overlay.style.width = "0%";
    for (
      let pTag = 0;
      pTag < this.refs.overlayContent.getElementsByTagName("p").length;
      pTag++
    ) {
      this.refs.overlayContent.getElementsByTagName("p")[pTag].style.display =
        "none";
    }
  };
  render() {
    return (
      <navbar>
        <div className="overlay" ref="overlay" />
        <header className="head">
          <div className="logo">
            <i class="fas fa-futbol" />
          </div>
          <div className="links overlay-content" ref="overlayContent">
            <p>
              <i className="fas fa-times" ref="close" onClick={this.closeNav} />
            </p>
            <p>Home</p>
            <p>About</p>
            <p>Product</p>
            <p>Contact</p>
          </div>
          <div className="hamburger">
            <i className="fas fa-bars" ref="hamburger" onClick={this.openNav} />
          </div>
        </header>
        <script src="./navbar.js" />
      </navbar>
    );
  }
}

export default Nav;
