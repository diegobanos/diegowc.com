import React, { Component } from "react";
import ReactDOM from "react-dom";

class Avatar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <img src={this.props.image} class="img-fluid rounded-circle mx-auto d-block"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
