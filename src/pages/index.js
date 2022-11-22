import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import slickScript from '../js/slick.js';
import $ from 'jquery';
// import themeScript from '../js/theme.js';
import styles from './index.module.css';

// import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="header-home">
        <video muted="muted" loop>
            <source src="vid/eden-3.mp4"></source>
          </video>
        <div className="header-content">
          <div className="m-container-1400">
            <h1>Multichain Infrastructure for <span className="text-green">Maximal Value</span></h1>
            <div className="logo-list">
              <div><img src="img/logo-jumpcap.svg" alt=""/></div>
              <div><img src="img/logo-multicoin.svg" alt=""/></div>
              <div><img src="img/logo-gsr.svg" alt=""/></div>
              <div><img src="img/logo-wintermute.svg" alt=""/></div>
            </div>
            <div className="white-boxes">
              <div className="m-grid m-grid-gap-30">
                <div className="m-xl-6 m-lg-6 m-md-12 m-sm-12 m-xs-12 white-box">
                  <img className="sub-logo" src="img/eden-logo-blue-rpc.svg" alt=""/>
                  <img className="available-on" src="img/available-on-eth.svg" alt="" />
                  <h2>MEV Protection for Traders</h2>
                  <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                  <div className="lower-links">
                    <a href="" className="button">Get started</a>
                    <a href="" className="docs"></a>
                  </div>
                </div>
                <div className="m-xl-6 m-lg-6 m-md-12 m-sm-12 m-xs-12 white-box">
                  <img className="sub-logo" src="img/eden-logo-blue-relay.svg" alt=""/>
                  <img className="available-on" src="img/available-on-eth.svg" alt="" />
                  <h2>MEV Extraction for Web3 Infrastructure</h2>
                  <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
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
      <div className="m-container-1400">
        <div className="m-grid numbers-grid">
          <div className="m-xl-3 m-lg-3 m-md-6 m-sm-6 m-sm-6 m-xs-12 number-grid-col">
            <span className="number-large">9,321</span>
            <span className="number-label">Validators</span>
          </div>
          <div className="m-xl-3 m-lg-3 m-md-6 m-sm-6 m-sm-6 m-xs-12 number-grid-col">
            <span className="number-large">#1</span>
            <span className="number-label">Block Profit Rank</span>
          </div>
          <div className="m-xl-3 m-lg-3 m-md-6 m-sm-6 m-sm-6 m-xs-12 number-grid-col">
            <span className="number-large">$1,000</span>
            <span className="number-label">MEV Extracted</span>
          </div>
          <div className="m-xl-3 m-lg-3 m-md-6 m-sm-6 m-sm-6 m-xs-12 number-grid-col">
            <span className="number-large">1.55<span className="number-eth">ETH</span></span>
            <span className="number-label">Average Block Reward</span>
          </div>
        </div>
      </div>
    </div>
  );
}


function HomepageLogoSliders() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="module-logosliders">
      <div className="m-container-1400 text-center">
        <h2>Maximising profits for the best in Web3</h2>
        <div className="sliderholder">
          <div className="home-slider">
            <div className="slide">
              <img src="img/logo-binance.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-bitcoin_suisse.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-bitstamp.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-chorus.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-coinbase.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-huobi.svg" alt=""/>
            </div>
          </div>
        </div>
        <div className="sliderholder" dir="rtl">
          <div className="home-slider-rtl" >
            <div className="slide">
              <img src="img/logo-staked.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-rocket.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-solana.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-s.svg" alt=""/>
            </div>
            <div className="slide">
              <img src="img/logo-kraken.svg" alt=""/>
            </div>
            <div className="slide">
        
            </div>
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
      <div className="m-container-1400">
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

function HomepageTweets() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="module-logosliders">
      <div className="m-container-1400 text-center">
        <h2>Latest news from our world</h2>
        <div className="twitter-slider">
          <div className="slider-twitter" >

            <div className="tweet-slide">
              <div class="tweet-slide-box">
                <div class="tweet-author">
                  <img src="img/twitter-pic.png" alt="" />
                  <span class="tweet-author-name">John Smith</span>
                  <span class="tweet-author-handle">@john_smith</span>
                </div>
                <div class="tweet">
                  <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.</p>
                </div>
              </div>
            </div>


            <div className="tweet-slide">
              <div class="tweet-slide-box">
                <div class="tweet-author">
                  <img src="img/twitter-pic.png" alt="" />
                  <span class="tweet-author-name">John Smith</span>
                  <span class="tweet-author-handle">@john_smith</span>
                </div>
                <div class="tweet">
                  <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.</p>
                </div>
              </div>
            </div>


            <div className="tweet-slide">
              <div class="tweet-slide-box">
                <div class="tweet-author">
                  <img src="img/twitter-pic.png" alt="" />
                  <span class="tweet-author-name">John Smith</span>
                  <span class="tweet-author-handle">@john_smith</span>
                </div>
                <div class="tweet">
                  <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.</p>
                </div>
              </div>
            </div>


            <div className="tweet-slide">
              <div class="tweet-slide-box">
                <div class="tweet-author">
                  <img src="img/twitter-pic.png" alt="" />
                  <span class="tweet-author-name">John Smith</span>
                  <span class="tweet-author-handle">@john_smith</span>
                </div>
                <div class="tweet">
                  <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.</p>
                </div>
              </div>
            </div>

            <div className="tweet-slide">
              <div class="tweet-slide-box">
                <div class="tweet-author">
                  <img src="img/twitter-pic.png" alt="" />
                  <span class="tweet-author-name">John Smith</span>
                  <span class="tweet-author-handle">@john_smith</span>
                </div>
                <div class="tweet">
                  <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.</p>
                </div>
              </div>
            </div>

            <div className="tweet-slide">
              <div class="tweet-slide-box">
                <div class="tweet-author">
                  <img src="img/twitter-pic.png" alt="" />
                  <span class="tweet-author-name">John Smith</span>
                  <span class="tweet-author-handle">@john_smith</span>
                </div>
                <div class="tweet">
                  <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.</p>
                </div>
              </div>
            </div>








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
      <div className="m-container-1400 text-center">
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
        <HomepageLogoSliders />
        <HomepageQuote />
        <HomepageTweets />
        <HomepageCTA />
      
      </main>
    </Layout>
  );
}

// $(function(){
//   $(".home-slider").slick({
//     dots:false,
//     arrows:false,
//     autoplay:true,
//     autoplaySpeed:0,
//     speed:10000,
//     easing:'linear',
//     pauseOnHover:false,
//     slidesToShow:5,
//     cssEase:'linear',
//     centerMode:true,
//     centerPadding:'30px',
//     responsive: [
//       {
//         breakpoint: 990,
//         settings: {
//           slidesToShow: 4
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 560,
//         settings: {
//           slidesToShow: 2
//         }
//       }
//     ]
//   });
//   $(".home-slider-rtl").slick({
//     dots:false,
//     arrows:false,
//     autoplay:true,
//     autoplaySpeed:0,
//     speed:10000,
//     easing:'linear',
//     pauseOnHover:false,
//     slidesToShow:5,
//     rtl:true,
//     cssEase:'linear',
//     responsive: [
//       {
//         breakpoint: 990,
//         settings: {
//           slidesToShow: 4
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 560,
//         settings: {
//           slidesToShow: 2
//         }
//       }
//     ]
//   });

//   $(".slider-twitter").slick({
//     dots:true,
//     arrows:false,
//     autoplay:false,
//     autoplaySpeed:0,
//     speed:300,
//     easing:'linear',
//     pauseOnHover:true,
//     slidesToShow:5,
//     cssEase:'linear',
//     responsive: [
//       {
//         breakpoint: 990,
//         settings: {
//           slidesToShow: 4
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 560,
//         settings: {
//           slidesToShow: 2
//         }
//       }
//     ]
//   });

// $("video").trigger("play");

 
// });


// window.onscroll = function(){
//   var scrollTop = window.pageYOffset;
//   if(scrollTop >= 1){
//     $(".navbar").addClass("bg");
//   }else{
//     $(".navbar").removeClass("bg");
//   }
// };