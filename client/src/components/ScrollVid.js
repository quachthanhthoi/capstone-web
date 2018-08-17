import React, { Component } from "react";

import "./scrollVid.css";
import humanActVid from "../images/human-action.mov";
import humanActVid2 from "../images/human-action-H246.mp4";

export class ScrollVid extends Component {
  constructor(props) {
    super(props);
    this.state = { over: false };

    // This binding is necessary to make `this` work in the callback
    // this.contr = this.contr.bind(this);
  }

  componentDidMount(){
    this.handlescroll();
  }

  handlescroll = () => {
    var vid = document.getElementById("v0");
    var windowheight = window.innerHeight - 20;
    var scrollpos = window.pageYOffset / 400;
    var targetscrollpos = scrollpos;
    var accel = 0;

    var accelamount = 0.7;

    vid.pause();

    window.onscroll = function() {
      targetscrollpos = window.pageYOffset / 400;
      console.log(targetscrollpos);
    };

    setInterval(() => {
      scrollpos += (targetscrollpos - scrollpos) * accelamount;
      if (targetscrollpos > 1.5 && this.state.over==false) {
        this.setState({ over: true });
      } else if (targetscrollpos < 1.5 && this.state.over!=false) {
        this.setState({ over: false });
      }
      vid.currentTime = scrollpos;
      vid.pause();
    }, 10);
  };


  render() {
    let className = this.state.over ? "overthreshold" : "underthreshold";
    return (
      <div>
        <video
          id="v0"
          className={className}
          tabindex="0"
          autobuffer="autobuffer"
          preload="preload"
        >
          <source
            type="video/mp4; codecs=&quot;vp8, vorbis&quot;"
            src={humanActVid}
          />
        </video>

        <div className="human">Human</div>
        <div className="activity">Activity Recognition</div>
      </div>
    );
  }
}
