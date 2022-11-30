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
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              dots:true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              dots:true,
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
              dots:true,
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
            <h2>MEV Protection for Traders</h2>
            {/* <p>Set up the Eden RPC in MetaMask to enable MEV protection for every transaction you make - it’s completely free to use.</p> */}
            <p>A set of endpoints that protect Ethereum users from malicious MEV (i.e. frontrunnning, sandwich attacks)</p>
            <div className="lower-links">
              <a href="" className="button">Get started</a>
              <a href="" className="docs"></a>
            </div>
          </div>
          <div className="white-box">
            <img className="sub-logo" src="img/eden-logo-blue-relay.svg" alt=""/>
            <img className="available-on" src="img/available-on-eth_outlined.svg" alt="" />
            <h2>MEV Extraction for Web3 Infrastructure</h2>
            {/* <p>A suite of OFAC compliant tools designed for validators and builders to maximize their revenue - they are completely free to integrate.</p> */}
            <p>A suite of tools for Ethereum validators and builders to maximize their revenue</p>
            <div className="lower-links">
              <a href="" className="button">Get started</a>
              <a href="" className="docs"></a>
            </div>
          </div>
          <div className="white-box">
            <img className="sub-logo" src="img/eden-logo-blue-bundles.svg" alt=""/>
            <img className="available-on" src="img/available-on-eth_outlined.svg" alt="" />
            <h2>XXX XXX XXX XXX</h2>
            <p>An endpoint for sophisticated MEV searchers to submit bundles to a network of builders</p>
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