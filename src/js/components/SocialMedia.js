import React, { PureComponent } from "react";
import $ from "jquery";

import InstagramIcon from "./../../images/icons/instagram.svg";
import TwitterIcon from "./../../images/icons/twitter.svg";
import LinkedinIcon from "./../../images/icons/linkedin.svg";
import GithubIcon from "./../../images/icons/github.svg";

export default class SocialMedia extends PureComponent {
  constructor() {
    super();
  }

  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip()
  }

  render() {
    return (
      <div className="container-fluid social-media">
        <div className="row justify-content-center text-center">
          <div className="col-2 col-lg-1">
            <a href="https://www.instagram.com/diegowc_"><img className="img-fluid" src={InstagramIcon} data-toggle="tooltip" data-placement="bottom" title="Instagram"/></a>
          </div>
          <div className="col-2 col-lg-1">
            <a href="https://www.linkedin.com/in/diegobanosfarinas"><img className="img-fluid" src={LinkedinIcon} data-toggle="tooltip" data-placement="bottom" title="LinkedIn"/></a>
          </div>
          <div className="col-2 col-lg-1">
            <a href="https://twitter.com/diegowc__"><img className="img-fluid" src={TwitterIcon} data-toggle="tooltip" data-placement="bottom" title="Twitter"/></a>
          </div>
          <div className="col-2 col-lg-1">
            <a href="https://github.com/diegobanos"><img className="img-fluid" src={GithubIcon} data-toggle="tooltip" data-placement="bottom" title="Github"/></a>
          </div>
        </div>
      </div>
    );
  }
}
