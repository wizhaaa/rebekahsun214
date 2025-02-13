// import {useState} from "react";

import "./App.css";
import "./yes.css";

import kiss from "./assets/kiss.gif";
import yay from "./assets/yay.gif";

function Yes() {
  return (
    <div className="yes-container yay">
      <img src={yay} alt="yay" width={200} />
      <div> YESSSSS YAYYYY WOOOOOOO </div>
      <div> this is the best day of my life!!!</div>
      <div> i got a baddie to my valentines </div>
      <div> ilyyyyy </div>
      <img src={kiss} alt="kiss" width={200} />

      <audio autoPlay>
        <source src="canthelpflaling.mp3" type="audio/mpeg"></source>
      </audio>
      <div> *muwwaaaahhh* </div>
      <div> why'd u copy me and make a video too ... i feel unoriginal</div>
      <div> i was editing this since like jan tho sooo i did it first</div>
      <div> watch on ur mac for best quality too + max volume !! </div>
      <div> </div>
      <div className="video">
        <iframe
          width="620"
          height="515"
          src="https://www.youtube.com/embed/_0wS4BAqmW8?si=gzi5Bpl4MY06ja2r"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div> I REALLY MISS U A LOT IM SORRY I BUSY THESE PAST FEW DAYS </div>
      <div> WO XIANG NI, WO ZHEN AI NI, WO XIHUAN NI </div>
    </div>
  );
}

export default Yes;
