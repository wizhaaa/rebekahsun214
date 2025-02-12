import {useState} from "react";
import Yes from "./Yes";

import "./App.css";
import shy from "./assets/shy.gif";

function App() {
  const [yes, setYes] = useState(false);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  const [w, setW] = useState(100);
  const [h, setH] = useState(70);
  const [fontsize, setFontsize] = useState(32);
  const texts = [
    "ahah",
    "plz..",
    ":(",
    "loser",
    "cant catch me",
    "give up..",
    "bruh",
    "but i love u",
  ];
  type Position = "absolute" | "relative" | "fixed" | "sticky" | "static";

  const [abs, setAbs] = useState<Position>("relative");

  const [no, setNo] = useState("no 😡");
  const [i, setI] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAbs("absolute");
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    let newX = rect.left + (offsetX < rect.width / 2 ? 50 : -50);
    let newY = rect.top + (offsetY < rect.height / 2 ? 50 : -50);

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (newX < 0) {
      newX = 0;
    } else if (newX + rect.width > screenWidth) {
      newX = screenWidth - rect.width;
    }

    if (newY < 0) {
      newY = 0;
    } else if (newY + rect.height > screenHeight) {
      newY = screenHeight - rect.height;
    }

    const isInCorner =
      (newX === 0 && newY === 0) || // Top-left corner
      (newX === 0 && newY + rect.height === screenHeight) || // Bottom-left corner
      (newX + rect.width === screenWidth && newY === 0) || // Top-right corner
      (newX + rect.width === screenWidth &&
        newY + rect.height === screenHeight); // Bottom-right corner

    if (isInCorner) {
      const centerX = screenWidth / 2 - rect.width / 2;
      const centerY = screenHeight / 2 - rect.height / 2;

      newX = centerX;
      newY = centerY;
    }
    setPos({x: newX, y: newY});
    setW(w + 25);
    setH(h + 25);
    setFontsize(fontsize + 8);
    const len = texts.length;
    setNo(texts[i]);
    const newI = (i + 1) % len;
    setI(newI);
  };

  const pleases = Array.from({length: 100}, (_, index) => (
    <span key={index}>pwease 🥺</span>
  ));
  if (!yes) {
    return (
      <div>
        <div className="hello"> herro rebekah... 👩🏻‍❤️‍💋‍👩🏻 </div>
        <img src={shy} width="150" />
        <div className="container">
          <div className="q"> Will u be my valentine's? </div>
        </div>
        <div className="subtitle"> {pleases} </div>
        <div className="controls">
          <button
            className="yes"
            style={{
              width: w,
              height: h,
              fontSize: fontsize,
            }}
            onClick={() => setYes(true)}
          >
            yes!
          </button>
          <div className="choose"> (^ choose this one) </div>
          <button
            className="no"
            onMouseMove={handleMouseMove}
            style={{
              position: `${abs}`,
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transition: "left 0.2, top 0.2s",
            }}
          >
            {no}
          </button>
        </div>
      </div>
    );
  } else {
    return <Yes />;
  }
}

export default App;
