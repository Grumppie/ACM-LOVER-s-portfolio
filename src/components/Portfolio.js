import React from 'react';
import mobile from "../images/mobile.png"
import desktop from "../images/desktop.png"
import game from "../images/game.jpeg"
import imgNotFound from "../images/imgNotFound.jpeg"

const Portfolio = (props) => {
  let resumeData = props.resumeData;

  const imageProvider = (img) => {
    switch (img) {
      case "mobile":
        return mobile

      case "desktop":
        return desktop

      case "game":
        return game

      default:
        return imgNotFound
    }
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
              
            }
          </div>
        </div>
      </div>
    </section>
  );

}

export default Portfolio