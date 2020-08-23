import React from "react";
import "./styles.css";
import erin from "../images/erin.jpg";

function About() {
  return (
    <div className="container my-4 mt-5">
    <div className="row">
      <div className="col-md-6 mr-6 mt-5">
        <img src={erin} alt="Erin" id="erin" class="img-fluid"/>
      </div>
      <div className="col-md-6 ml-6 mb-6 mt-5" id="boxy">
        <h3>About Me</h3>
        <p>
          Greetings! I hail from Tulsa, Oklahoma- the heart of "Tornado Alley".</p><p>I grew up playing: <span
            className="font-italic">Myst, Sim City, Lemmings, Carmen San Diego, Glider,</span> and <span className="font-italic">Monkey
            Island</span>.
          I love languages: coding, math, music, literature/writing, and art.
          My obsessions with puzzles, problem-solving, and helping other people drive me.
        </p>
        <p>
          Currently a student web-developer,  I enjoy JavaScript, jQuery, ES6, React.js, Node, Express, API's, JSON, AJAX, MySQL, MongoDB, Git, and Heroku.  I'm adept at HTML, CSS, Bootstrap, and other CSS frameworks. There is always more to come- I am a life-long learner!</p>
        <p> Profession: I have 15 decorated years of experience managing restaurants and cafés. I build inspired,
          loyal, sustainable teams. I put people first.</p> <p>
          Optimistic about finding a new career- in the Tech world, I hope to work my way up from a full stack web developer and one day
          combine my skill-sets: Leadership in Tech.</p><p>
          I am hopeful, hard-working, and driven.
        </p>
      </div>
    </div>
  </div>
  );
}

export default About;