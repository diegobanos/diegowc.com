import React, { PureComponent } from "react";

export default class Avatar extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-fluid avatar">
        <div className="row">
          <div className="col">
            <img src={this.props.image} className="shadow-lg img-fluid rounded-circle mx-auto d-block"/>
          </div>
        </div>
      </div>
    );
  }
}
