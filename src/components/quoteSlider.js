import React, { Component } from "react";
import Slider from "react-slick";

export default class QuoteSlider extends Component {
  render() {
    const settings = {
        dots:true,
        arrows:false,
        autoplay:false,
        autoplaySpeed:0,
        speed:500,
        easing:'linear',
        pauseOnHover:false,
        slidesToShow:1,
        cssEase:'linear',
    };
    return (
      
      <div className="quoteSliderHolder">
        <Slider {...settings}>
        
          
            <div className="quoteSlide">
                <div className="m-grid">
                    <div className="m-xl-3 m-lg-3 m-md-4 m-sm-3 m-xs-12">
                        <div className="text-center vertical-align">
                        <div className="vertical-outer">
                            <div className="vertical-inner">
                            <img className="quote-image" src="img/quote-logo-chorus.png" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="m-xl-1 m-lg-1 m-md-1 m-sm-1 m-xs-0"></div>
                    <div className="m-xl-8 m-lg-8 m-md-7 m-sm-8 m-xs-12">
                        <p className="quote">"We're glad to partner with Eden Network. Eden has been building cutting-edge tools to protect users against front-running and we're excited to support them in this important endeavor."</p>
                        <a href="https://www.chorus.one/" target="_blank" className="quote-by">Chorus One</a>
                    </div>
                </div>
            </div>

            <div className="quoteSlide">
                <div className="m-grid">
                    <div className="m-xl-3 m-lg-3 m-md-4 m-sm-3 m-xs-12">
                        <div className="text-center vertical-align">
                        <div className="vertical-outer">
                            <div className="vertical-inner">
                            <img className="quote-image" src="img/quote-logo-everstake.png" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="m-xl-1 m-lg-1 m-md-1 m-sm-1 m-xs-0"></div>
                    <div className="m-xl-8 m-lg-8 m-md-7 m-sm-8 m-xs-12">
                        <p className="quote">"Our partnership with Eden Network is now on a whole new level! After the testing period, the Eden relay works steady, and our DevOps team is happy with it. It's a great partnership, y'all."</p>
                        <a href="https://everstake.one/" target="_blank" className="quote-by">Everstake</a>
                    </div>
                </div>
            </div>

            <div className="quoteSlide">
                <div className="m-grid">
                    <div className="m-xl-3 m-lg-3 m-md-4 m-sm-3 m-xs-12">
                        <div className="text-center vertical-align">
                        <div className="vertical-outer">
                            <div className="vertical-inner">
                            <img className="quote-image" src="img/quote-logo-staking-facilities.png" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="m-xl-1 m-lg-1 m-md-1 m-sm-1 m-xs-0"></div>
                    <div className="m-xl-8 m-lg-8 m-md-7 m-sm-8 m-xs-12">
                        <p className="quote">"After stealth mode testing, we're excited to announce that we've joined Eden Network's Eden Relay - let's build better blocks"</p>
                        <a href="https://stakingfacilities.com/" target="_blank" className="quote-by">Staking Facilities</a>
                    </div>
                </div>
            </div>


            <div className="quoteSlide">
                <div className="m-grid">
                    <div className="m-xl-3 m-lg-3 m-md-4 m-sm-3 m-xs-12">
                        <div className="text-center vertical-align">
                        <div className="vertical-outer">
                            <div className="vertical-inner">
                            <img className="quote-image" src="img/quote-logo-yak.png" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="m-xl-1 m-lg-1 m-md-1 m-sm-1 m-xs-0"></div>
                    <div className="m-xl-8 m-lg-8 m-md-7 m-sm-8 m-xs-12">
                        <p className="quote">"Seeing this kind of technical reliability and expertise is why it was a no-brainer to have Eden Network manage the $yyAVAX validator network."</p>
                        <a href="https://yieldyak.com/" target="_blank" className="quote-by">Yield Yak</a>
                    </div>
                </div>
            </div>


            <div className="quoteSlide">
                <div className="m-grid">
                    <div className="m-xl-3 m-lg-3 m-md-4 m-sm-3 m-xs-12">
                        <div className="text-center vertical-align">
                        <div className="vertical-outer">
                            <div className="vertical-inner">
                            <img className="quote-image" src="img/quote-logo-rated.png" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="m-xl-1 m-lg-1 m-md-1 m-sm-1 m-xs-0"></div>
                    <div className="m-xl-8 m-lg-8 m-md-7 m-sm-8 m-xs-12">
                        <p className="quote">"Since the start of October, Eden Network's relay has had consistently higher block rewards than Flashbots', driven by two builders who exclusively send their bids to it. These builders produce higher value blocks than the 4 identified Flashbots builders."</p>
                        <a href="https://www.rated.network/" target="_blank" className="quote-by">Rated Network</a>
                    </div>
                </div>
            </div>
      
        </Slider>
      </div>
    );
  }
}