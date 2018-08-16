import React, { Component } from "react";
import "./intro.css";
import AOS from "aos";
import "./aos.css";
import Dense2 from "../../images/dense2.jpg";
//It only works for me when I copy aos.css to my project

import { ScrollVid } from "../../components/ScrollVid";

export class Intro extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }
  render() {
    return (
      <div>
        <ScrollVid />

        <div className="simple" data-aos="fade-up">
          The algorithm of tracking dense trajectories
        </div>
        <img className="denseImg" src={Dense2} alt="" data-aos="zoom-out"/>

        <div id="set-height" />
      </div>
    );
  }
}
