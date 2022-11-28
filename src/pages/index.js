import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Slider from "react-slick";
import SliderLTR from '../components/homeSlider.js';
import SliderRTL from '../components/homeSliderRTL.js';
import SliderTwitter from '../components/sliderTwitter.js';
import { useEffect } from 'react';
import { useState } from 'react';
import { Timeline } from 'react-twitter-widgets'


function ScrollTester() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
     if(window.scrollY == 0){
      const boxes = document.getElementsByClassName('navbar');
      for (const box of boxes) {
        box.classList.remove('bg');
      }
     }else{
      const boxes = document.getElementsByClassName('navbar');
      for (const box of boxes) {
        box.classList.add('bg');
      }
     }
    });
  }, []);
  return(
    <div class="scrollchecker">scroll checker</div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="header-home">
        <video muted="muted" autoPlay loop id="mainvid">
            <source src="vid/eden-3.mp4"></source>
          </video>
          <div className="video-overlay"></div>
        <div className="header-content">
          <div className="m-container-1200">
            <h1>Multichain Infrastructure for <span className="text-green">Maximal Value</span></h1>
            {/* <div className="logo-list">
              <div><img src="img/logo-jumpcap.svg" alt=""/></div>
              <div><img src="img/logo-multicoin.svg" alt=""/></div>
              <div><img src="img/logo-gsr.svg" alt=""/></div>
              <div><img src="img/logo-wintermute.svg" alt=""/></div>
            </div> */}
            <div className="white-boxes">
              <div className="m-grid m-grid-gap-30">
                <div className="m-xl-6 m-lg-6 m-md-12 m-sm-12 m-xs-12 white-box">
                  <img className="sub-logo" src="img/eden-logo-blue-rpc.svg" alt=""/>
                  <img className="available-on" src="img/available-on-eth_outlined.svg" alt="" />
                  <h2>MEV Protection for Traders</h2>
                  <p>Set up the Eden RPC in MetaMask to enable MEV protection for every transaction you make - it’s completely free to use.</p>
                  <div className="lower-links">
                    <a href="" className="button">Get started</a>
                    <a href="" className="docs"></a>
                  </div>
                </div>
                <div className="m-xl-6 m-lg-6 m-md-12 m-sm-12 m-xs-12 white-box">
                  <img className="sub-logo" src="img/eden-logo-blue-relay.svg" alt=""/>
                  <img className="available-on" src="img/available-on-eth_outlined.svg" alt="" />
                  <h2>MEV Extraction for Web3 Infrastructure</h2>
                  <p>A suite of OFAC compliant tools designed for validators and builders to maximize their revenue - they are completely free to integrate.</p>
                  <div className="lower-links">
                    <a href="" className="button">Get started</a>
                    <a href="" className="docs"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}





function HomepageNumbers() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="module-numbers">
      <div className="m-container-1200">
        <div className="m-grid numbers-grid">
          <div className="m-xl-3 m-lg-3 m-md-6 m-sm-6 m-sm-6 m-xs-12 number-grid-col">
            <span className="number-large">209,744</span>
            <span className="number-label">Validators Connected</span>
          </div>
          <div className="m-xl-3 m-lg-3 m-md-6 m-sm-6 m-sm-6 m-xs-12 number-grid-col">
            <span className="number-large">44%</span>
            <span className="number-label">Ethereum Validator Penetration</span>
          </div>
          <div className="m-xl-3 m-lg-3 m-md-6 m-sm-6 m-sm-6 m-xs-12 number-grid-col">
            <span className="number-large">0.2<span className="number-eth">ETH</span></span>
            <span className="number-label">Avg Eden Block Reward</span>
          </div>
          <div className="m-xl-3 m-lg-3 m-md-6 m-sm-6 m-sm-6 m-xs-12 number-grid-col">
            <span className="number-large">266%</span>
            <span className="number-label">% Above Avg Market Block</span>
          </div>
        </div>
      </div>
    </div>
  );
}
 
function HomepageQuote() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="module-quote">
      <div className="m-container-1200">
        <div className="m-grid">
          <div className="m-xl-3 m-lg-3 m-md-4 m-sm-3 m-xs-12">
            <div className="text-center vertical-align">
              <div className="vertical-outer">
                <div className="vertical-inner">
                <img className="quote-image" src="img/near-protocol-near-logo.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="m-xl-1 m-lg-1 m-md-1 m-sm-1 m-xs-0"></div>
          <div className="m-xl-8 m-lg-8 m-md-7 m-sm-8 m-xs-12">
            <p className="quote">“Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.”</p>
            <p className="quote-by">Important Person. Important Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function HomepageCTA() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="module-cta">
      <div className="m-container-1200 text-center">
        <h2 className="large text-blue">Ready to maximise your projects earnings?</h2>
        <a href="" className="button blue large">Contact us now</a>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        
        <HomepageNumbers />
        <div className="module-logosliders">
        <div className="m-container-1200 text-center">
            <h2>Maximising profits for the best in Web3</h2>
            <SliderLTR />
            <SliderRTL />
        </div>
        </div>
      
        <HomepageQuote />

        <div className="module-logosliders">
<div className="m-container-1000 text-center">
  <h2>Latest news from our world</h2>
  <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'edennetwork'
  }}
  options={{
    chrome: "noheader, nofooter",
    height: '800',
  }}
/>
  </div>
  </div>

        


        <HomepageCTA />
        <ScrollTester />
      
      </main>
    </Layout>
  );
}




// window.onscroll = function(){
//   var scrollTop = window.pageYOffset;
//   if(scrollTop >= 1){
//     $(".navbar").addClass("bg");
//   }else{
//     $(".navbar").removeClass("bg");
//   }
// }; 