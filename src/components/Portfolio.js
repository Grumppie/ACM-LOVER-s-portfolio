import React from 'react';
import mobile from "../images/mobile.png"
import desktop from "../images/desktop.png"

const Portfolio = (props) => {
  let resumeData = props.resumeData;

  const imageProvider = (img) => {
    if (img === "mobile") {
      return mobile
    }
    else {
      return desktop
    }
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
              resumeData.portfolio.map((item) => {
                return (
                  <></>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );

}

export default Portfolio