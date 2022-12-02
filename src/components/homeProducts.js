import React, { Component } from "react";
import Slider from "react-slick";

export default class HomeProducts extends Component {
  render() {
    const settings = {
        dots:false,
        arrows:false,
        autoplay:false,
        autoplaySpeed:0,
        speed:500,
        easing:'linear',
        pauseOnHover:false,
        slidesToShow:3,
        cssEase:'linear',
        responsive: [
          {
            breakpoint: 988,
            settings: {
              slidesToShow: 1,
              dots:true,
              arrows:false,
              autoplay:true,
              autoplaySpeed:6000,
              draggable:true,
            }
          }
        ]
    };
    return ( 
      
        <div className="white-boxes">
         <Slider {...settings}>
          <div className="white-box">
            <img className="sub-logo" src="img/eden-logo-blue-rpc.svg" alt=""/>
            <img className="available-on" src="img/available-on-eth_outlined.svg" alt="" />
            <h2>Transaction Protection</h2>
            <p>Simple to add end-points that allows anyone to route their transactions through a private node network, with protection from front-running & sandwich attacks.</p>
            <div className="lower-links">
              <a href="" className="button">Get started</a>
              <a href="" className="docs"></a>
            </div>
          </div>
          <div className="white-box">
            <img className="sub-logo" src="img/eden-logo-blue-relay.svg" alt=""/>
            <img className="available-on" src="img/available-on-eth_outlined.svg" alt="" />
            <h2>Boost Your Rewards</h2>
            <p>A suite of OFAC compliant tooling for Ethereum validators and builders to maximize their revenue.</p>
            <div className="lower-links">
              <a href="" className="button">Get started</a>
              <a href="" className="docs"></a>
            </div>
          </div>
          <div className="white-box">
            <img className="sub-logo" src="img/eden-logo-blue-bundles.svg" alt=""/>
            <img className="available-on" src="img/available-on-eth_outlined.svg" alt="" />
            <h2>Bundle Execution</h2>
            <p>An endpoint for sophisticated searchers to submit bundles to a network of builders.</p>
            <div className="lower-links">
              <a href="" className="button">Get started</a>
              <a href="" className="docs"></a>
            </div>
          </div>
          </Slider>
      </div>

    );
  }
}