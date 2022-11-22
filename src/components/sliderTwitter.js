import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderTwitter extends Component {
  render() {
    const settings = {
        dots:true,
        arrows:false,
        autoplay:false,
        autoplaySpeed:0,
        speed:300,
        easing:'linear',
        pauseOnHover:true,
        slidesToShow:5,
        cssEase:'linear',
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 2
            }
          }
        ]
    };
    return (
    



<div className="module-logosliders">
<div className="m-container-1400 text-center">
  <h2>Latest news from our world</h2>
  <div className="twitter-slider">
  <Slider {...settings} >

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








  
 </Slider>
 </div>
</div>
</div>



    );
  }
}