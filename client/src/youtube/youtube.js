import React from "react";
import YouTube from "react-youtube";
import "./youtube.scss";

class YT extends React.Component {
  opts = {
    boxShadow: "3px 3px 2px 1px red",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: 1,
      controls: 0
    }
  };
  _onEnd = event => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };
  render() {
    return (
      <section className="youtube">
        <YouTube
          videoId={this.props.player}
          opts={this.opts}
          onReady={this._onReady}
          onEnd={this._onEnd}
          onPause={this._onEnd}
        />
      </section>
    );
  }
}

export default YT;
