import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Slider from "react-slick";
import SliderLTR from '../components/homeSlider.js';
import SliderLTR2 from '../components/homeSlider2.js';
import SliderRTL from '../components/homeSliderRTL.js';
import SliderTwitter from '../components/sliderTwitter.js';
import QuoteSlider from '../components/quoteSlider';
import HomeProducts from '../components/homeProducts';
import { useEffect } from 'react';
import { useState } from 'react';
import { Timeline } from 'react-twitter-widgets';



 
function ScrollTester() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if(window.scrollY == 0){
      const boxes = document.getElementsByClassName('navbar');
      for (const box of boxes) {
        box.classList.add('bg');
      }
     }else{
      const boxes = document.getElementsByClassName('navbar');
      for (const box of boxes) {
        box.classList.remove('bg');
      }
     } 
    

    window.addEventListener("scroll", () => {
     if(window.scrollY == 0){
      const boxes = document.getElementsByClassName('navbar');
      for (const box of boxes) {
        box.classList.add('bg');
      }
     }else{
      const boxes = document.getElementsByClassName('navbar');
      for (const box of boxes) {
        box.classList.remove('bg');
      }
     } 
    });
  }, []);
  return(
    <div className="scrollchecker">scroll checker</div>
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

            <HomeProducts />
            


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
        <QuoteSlider />
      </div>
    </div>
  );
}


function HomepageCTA() {
  const handleClick = event => {
    event.preventDefault();

    const boxes = document.getElementsByClassName('popupbox');
    for (const box of boxes) {
      box.classList.add('visible');
    }


  };

  return (
    <div className="module-cta">
      <div className="m-container-1200 text-center">
        <h2 className="large text-blue">Ready to maximise your projects earnings?</h2>
        <a href="#" onClick={handleClick} className="button blue large">Contact us now</a>
       
      </div> 
    </div> 
  );
}


function PopUpBoxHolder() {
  const handleClickClose = event => {
    event.preventDefault();

    const boxes = document.getElementsByClassName('popupbox');
    for (const box of boxes) {
      box.classList.remove('visible');
    }


  };
  return(
    <div className="popupbox">

      <div className="vertical-align">
        <div className="vertical-outer">
          <div className="vertical-inner">
          <div className="popupBoxholder">
            <a href="#" onClick={handleClickClose} className="close">X</a>
            <iframe src="https://webforms.pipedrive.com/f/6ivlo0ZrN02EMZtJEC64tZk1vzTc5FzIYCqEe7Ou6iJhFLo9WkLM3TI03al5fxOvaH"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};


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
            <SliderLTR2 />
        </div>
        </div>
      
        <HomepageQuote />

        {/* <div className="module-logosliders" id="twitterfeed">
<div className="m-container-1000 text-center">
  <h2>Latest news from our world</h2>
  <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'edennetwork'
  }}
  options={{
    chrome: "noheader, nofooter",
    height: '500',
  }}
/>
  </div>
  </div> */}


        


        <HomepageCTA />
        <ScrollTester />
      
      </main>
      <PopUpBoxHolder />
    </Layout>
  );
}
