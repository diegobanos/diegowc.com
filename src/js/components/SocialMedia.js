import React, { Component } from "react";
import ReactDOM from "react-dom";

class SocialMedia extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="container-fluid social-media">
        <div class="row justify-content-center text-center">
          <div class="col-3 col-md-1">
            <a href="https://www.instagram.com/diegowc_">Insta</a>
          </div>
          <div class="col-3 col-md-1">
            <a href="https://twitter.com/diegowc__">Twitter</a>
          </div>
          <div class="col-3 col-md-1">
            <a href="https://github.com/diegobanos">Github</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
