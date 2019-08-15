import React from "react";
import Nav from "../grid_navbar/nav";
import Plinks from "../grid_plinks/plinks";
import YT from "../youtube/youtube";
import Header from "../grid_header/header";
import "../app/App.css";

class PlayerSection extends React.Component {
  render() {
    return (
      <div
        className={this.props.section}
        data-menuanchor={`section${this.props.playerId}a`}
        id={`section${this.props.playerId}`}
      >
        <div className={`App`}>
          <Nav />
          <YT player={this.props.playerYT} />
          <Header
            playerName={this.props.playerName}
            shortBio={this.props.shortBio}
            playerPic={this.props.bg}
            teamColor={this.props.teamColor}
            secondaryColor={this.props.secondaryColor}
          />
          <Plinks
            teamColor={this.props.teamColor}
            playerId={this.props.playerId}
          />
        </div>
      </div>
    );
  }
}

export default PlayerSection;
