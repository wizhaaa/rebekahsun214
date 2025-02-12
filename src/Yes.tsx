// import {useState} from "react";

import "./App.css";
import "./yes.css";

function Yes() {
  return (
    <div className="yes-container yay">
      <div> YESSSSS YAYYYY WOOOOOOO </div>
      <div> this is the best day of my life!!!</div>
      <div> ilyyyyy </div>

      <div> kinda funny we both made a video </div>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_0wS4BAqmW8?si=gzi5Bpl4MY06ja2r"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Yes;
