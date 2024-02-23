import React, { useEffect, useState } from "react";

import transparent from "./Transparent.png"

import cross from "./Cross.png"

import circle from "./Circle.png"

function ContentComponent() {

  const [a00, seta00] = useState(transparent);

  const [a01, seta01] = useState(transparent);

  const [a02, seta02] = useState(transparent);

  const [a10, seta10] = useState(transparent);

  const [a11, seta11] = useState(transparent);

  const [a12, seta12] = useState(transparent);

  const [a20, seta20] = useState(transparent);

  const [a21, seta21] = useState(transparent);

  const [a22, seta22] = useState(transparent);

  const [counter, setCounter] = useState(0);

  const [A00, setA00] = useState(null);

  const [A01, setA01] = useState(null);

  const [A02, setA02] = useState(null);

  const [A10, setA10] = useState(null);

  const [A11, setA11] = useState(null);

  const [A12, setA12] = useState(null);

  const [A20, setA20] = useState(null);

  const [A21, setA21] = useState(null);

  const [A22, setA22] = useState(null);

  const [undo, setUndo] = useState(0);

  const [winner, setWinner] = useState(transparent);

  const [crossplay, setCrossplay] = useState("Play");

  const [circleplay, setCircleplay] = useState("Stop");

  const [disp, setDisp] = useState("none");

  var check_array = [[A00, A01, A02], [A10, A11, A12], [A20, A21, A22]];

  function increment() {
    var incr = counter;
    setPlayBar();
    incr++;
    setCounter(incr);
  }

  function decrement() {
    var decr = counter;
    setPlayBar();
    decr--;
    setCounter(decr);
  }

  function setPlayBar() {
    if (counter % 2 === 0) {
      setCrossplay("Stop");
      setCircleplay("Play");
    }
    if (counter % 2 !== 0) {
      setCrossplay("Play");
      setCircleplay("Stop");
    }
  }

  function reset() {
    seta00(transparent);
    seta01(transparent);
    seta02(transparent);
    seta10(transparent);
    seta11(transparent);
    seta12(transparent);
    seta20(transparent);
    seta21(transparent);
    seta22(transparent);
    setWinner(transparent);

    setCircleplay("Stop");
    setCrossplay("Play");

    setCounter(0);

    setDisp("none");

    setA00(null);
    setA01(null);
    setA02(null);
    setA10(null);
    setA11(null);
    setA12(null);
    setA20(null);
    setA21(null);
    setA22(null);
  }

  function UndoClick() {

    if (undo === "a00") {
      seta00(transparent);
      setA00(null);
      setUndo(0);
      decrement();
    }
    else if (undo === "a01") {
      seta01(transparent);
      setUndo(0);
      setA01(null);
      decrement();
    }
    else if (undo === "a02") {
      seta02(transparent);
      setUndo(0);
      setA02(null);
      decrement();
    }
    else if (undo === "a10") {
      seta10(transparent);
      setUndo(0);
      setA10(null);
      decrement();
    }
    else if (undo === "a11") {
      seta11(transparent);
      setUndo(0);
      setA11(null);
      decrement();
    }
    else if (undo === "a12") {
      seta12(transparent);
      setUndo(0);
      setA12(null);
      decrement();
    }
    else if (undo === "a20") {
      seta20(transparent);
      setUndo(0);
      setA20(null);
      decrement();
    }
    else if (undo === "a21") {
      seta21(transparent);
      setUndo(0);
      setA21(null);
      decrement();
    }
    else if (undo === "a22") {
      seta22(transparent);
      setUndo(0);
      setA22(null);
      decrement();
    }
    else {
      setUndo(0);
    }
  }

  function WinnerPost(win) {
    setDisp("block");
    if (win === true) {
      setWinner(cross);
    }
    else {
      setWinner(circle);
    }
  }

  useEffect(()=>{
    Check();
  }, [Check, A00, A01, A02, A10, A11, A12, A20, A21, A22]);

  function Check() {
    for (var i = 0; i < 3; i++) {
      let j = 0;
      let k = 1;
      let l = 2;
      if (check_array[i][j] === check_array[i][k] & check_array[i][k] === check_array[i][l] & check_array[i][j] !== null) {
        WinnerPost(check_array[i][j]);
      }
      else if (check_array[j][i] === check_array[k][i] & check_array[k][i] === check_array[l][i] & check_array[j][i] !== null) {
        WinnerPost(check_array[j][i]);
      }
      else if (check_array[j][j] === check_array[k][k] & check_array[k][k] === check_array[l][l] & check_array[j][j] !== null) {
        WinnerPost(check_array[j][j]);
      }
      else if (check_array[l][j] === check_array[k][k] & check_array[k][k] === check_array[j][l] & check_array[l][j] !== null) {
        WinnerPost(check_array[l][j]);
      }
    }
  }

  return (
    <section>
      <h2>
        Welcome to the Tic-Tac-Toe Game!
      </h2>
      <h4 style={{ display: disp }}>
        <span>Winner:  </span><img src={winner} alt="Winner" />
      </h4>
      <div id="game-container">
        <div id="first-div">
          <p>
            <img src={cross} alt="Cross" /> : {crossplay}
          </p>
          <p>
            <img src={circle} alt="Circle" /> : {circleplay}
          </p>
        </div>
        <div id="mesh">
          <table>
            <tbody>
              <tr>
                <td style={{ borderTop: "none", borderLeft: "none" }} onClick={() => { if (counter % 2 === 0 & a00 === transparent & winner === transparent) { seta00(cross); increment(); setUndo("a00"); setA00(true); } if (counter % 2 !== 0 & a00 === transparent & winner === transparent) { seta00(circle); increment(); setUndo("a00"); setA00(false); } }}>
                  <img src={a00} alt="Choice" />
                </td>
                <td style={{ borderTop: "none" }} onClick={() => { if (counter % 2 === 0 & a01 === transparent & winner === transparent) { seta01(cross); increment(); setUndo("a01"); setA01(true); } if (counter % 2 !== 0 & a01 === transparent & winner === transparent) { seta01(circle); increment(); setUndo("a01"); setA01(false); } }}>
                  <img src={a01} alt="Choice" />
                </td>
                <td style={{ borderTop: "none", borderRight: "none" }} onClick={() => { if (counter % 2 === 0 & a02 === transparent & winner === transparent) { seta02(cross); increment(); setUndo("a02"); setA02(true); } if (counter % 2 !== 0 & a02 === transparent & winner === transparent) { seta02(circle); increment(); setUndo("a02"); setA02(false); } }}>
                  <img src={a02} alt="Choice" />
                </td>
              </tr>
              <tr>
                <td style={{ borderLeft: "none" }} onClick={() => { if (counter % 2 === 0 & a10 === transparent & winner === transparent) { seta10(cross); increment(); setUndo("a10"); setA10(true); } if (counter % 2 !== 0 & a10 === transparent & winner === transparent) { seta10(circle); increment(); setUndo("a10"); setA10(false); } }}>
                  <img src={a10} alt="Choice" />
                </td>
                <td onClick={() => { if (counter % 2 === 0 & a11 === transparent & winner === transparent) { seta11(cross); increment(); setUndo("a11"); setA11(true); } if (counter % 2 !== 0 & a11 === transparent & winner === transparent) { seta11(circle); increment(); setUndo("a11"); setA11(false); } }}>
                  <img src={a11} alt="Choice" />
                </td>
                <td style={{ borderRight: "none" }} onClick={() => { if (counter % 2 === 0 & a12 === transparent & winner === transparent) { seta12(cross); increment(); setUndo("a12"); setA12(true); } if (counter % 2 !== 0 & a12 === transparent & winner === transparent) { seta12(circle); increment(); setUndo("a12"); setA12(false); } }}>
                  <img src={a12} alt="Choice" />
                </td>
              </tr>
              <tr>
                <td style={{ borderBottom: "none", borderLeft: "none" }} onClick={() => { if (counter % 2 === 0 & a20 === transparent & winner === transparent) { seta20(cross); increment(); setUndo("a20"); setA20(true); } if (counter % 2 !== 0 & a20 === transparent & winner === transparent) { seta20(circle); increment(); setUndo("a20"); setA20(false); } }}>
                  <img src={a20} alt="Choice" />
                </td>
                <td style={{ borderBottom: "none" }} onClick={() => { if (counter % 2 === 0 & a21 === transparent & winner === transparent) { seta21(cross); increment(); setUndo("a21"); setA21(true); } if (counter % 2 !== 0 & a21 === transparent & winner === transparent) { seta21(circle); increment(); setUndo("a21"); setA21(false); } }}>
                  <img src={a21} alt="Choice" />
                </td>
                <td style={{ borderBottom: "none", borderRight: "none" }} onClick={() => { if (counter % 2 === 0 & a22 === transparent & winner === transparent) { seta22(cross); increment(); setUndo("a22"); setA22(true); } if (counter % 2 !== 0 & a22 === transparent & winner === transparent) { seta22(circle); increment(); setUndo("a22"); setA22(false); } }}>
                  <img src={a22} alt="Choice" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="second-div">
          <p>
            <button onClick={() => { if (winner === transparent) { UndoClick(); } }}>
              Undo
            </button>
          </p>
          <p>
            <button onClick={() => { reset(); }}>
              Reset
            </button>
          </p>
        </div>
      </div>
      <div id="note">
        <p>
          <span style={{ fontWeight: "bold" }}>Note: </span>The undo button takes only one step backwards!
        </p>
      </div>
    </section>
  );
}

export default ContentComponent;
