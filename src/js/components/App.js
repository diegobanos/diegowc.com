import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import Avatar from "./Avatar"
import SocialMedia from "./SocialMedia"
import Gallery from "./Gallery"

import AvatarImage from "./../../images/avatar.jpg";

export default class App extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Avatar image={AvatarImage}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <SocialMedia/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Gallery/>
          </div>
        </div>
        <footer>
          <div className="row">
            <div className="col">
              <span>&copy; Diego Baños Fariñas 2020</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
