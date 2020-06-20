import React, { Component } from "react";
import ReactDOM from "react-dom";

import Avatar from "./Avatar"
import SocialMedia from "./SocialMedia"
import Gallery from "./Gallery"

import AvatarImage from "./../../../assets/images/avatar.jpg";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <Avatar image={AvatarImage}/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <SocialMedia/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Gallery/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
