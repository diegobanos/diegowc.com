import React, { PureComponent } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

import Image01 from "./../../images/img01.jpg";
import Image02 from "./../../images/img02.jpg";
import Image03 from "./../../images/img03.jpg";
import Image04 from "./../../images/img04.jpg";
import Image05 from "./../../images/img05.jpg";
import Image06 from "./../../images/img06.jpg";
import Image07 from "./../../images/img07.jpg";
import Image08 from "./../../images/img08.jpg";
import Image09 from "./../../images/img09.jpg";
import Image10 from "./../../images/img10.jpg";

export default class Gallery extends PureComponent {
  constructor() {
    super();
  }

  componentDidMount() {
    var grid = document.querySelector('.grid');

    var msnry = new Masonry( grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });

    imagesLoaded( grid ).on( 'progress', function() {
      msnry.layout();
    });
  }

  render() {
    return (
      <div className="container-fluid gallery">
        <div className="row justify-content-md-center">
          <div className="col col-lg-9">
            <div className="grid">
              <div className="grid-sizer"></div>
              <div className="grid-item">
                <img src={Image01}/>
              </div>
              <div className="grid-item">
                <img src={Image02}/>
              </div>
              <div className="grid-item">
                <img src={Image03}/>
              </div>
              <div className="grid-item">
                <img src={Image04}/>
              </div>
              <div className="grid-item">
                <img src={Image05}/>
              </div>
              <div className="grid-item">
                <img src={Image06}/>
              </div>
              <div className="grid-item">
                <img src={Image07}/>
              </div>
              <div className="grid-item">
                <img src={Image08}/>
              </div>
              <div className="grid-item">
                <img src={Image09}/>
              </div>
              <div className="grid-item">
                <img src={Image10}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
