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
            <p>Easy to add end-points to route transactions through a private node network, with protection from front-running & sandwich attacks.</p>
            <div className="lower-links">
              <a href="https://docs.edennetwork.io/eden-rpc/overview" className="button">Get started</a>

            </div>
          </div>
          <div className="white-box">
            <img className="sub-logo" src="img/eden-logo-blue-relay.svg" alt=""/>
            <img className="available-on" src="img/available-on-eth_outlined.svg" alt="" />
            <h2>Boost Your Rewards</h2>
            <p>A suite of OFAC compliant tooling for Ethereum validators and builders to maximize their revenue.</p>
            <div className="lower-links">
              <a href="https://relay.edennetwork.io/info" className="button">Get started</a>
              <a href="https://docs.edennetwork.io/eden-relay/overview" className="docs"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16">
  <g id="Group_8" data-name="Group 8" transform="translate(0 -3)">
    <path id="Path_1" data-name="Path 1" d="M9.5,24A1.538,1.538,0,0,1,8,22.5V18.925H9.5V22.5h13V18.925H24V22.5A1.538,1.538,0,0,1,22.5,24ZM16,20.175,11.175,15.35l1.075-1.075,3,3V8h1.5v9.275l3-3,1.075,1.075Z" transform="translate(-8 -5)" fill="#171c47"/>
  </g>
</svg> Docs</a>
            </div>
          </div>
          <div className="white-box">
            <img className="sub-logo" src="img/eden-logo-blue-bundles.svg" alt=""/>
            <img className="available-on" src="img/available-on-eth_outlined.svg" alt="" />
            <h2>Bundle Execution</h2>
            <p>An endpoint for sophisticated searchers to submit bundles to a network of builders.</p>
            <div className="lower-links">
              <a href="https://docs.edennetwork.io/eden-bundles/overview" className="button">Get started</a>
            </div>
          </div>
          </Slider>
      </div>

    );
  }
}