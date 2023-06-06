import WordleBlock from "./components/WordleBlock";
import KeyboardKey from "./components/KeyboardKey";
import './index.css'
import React, { useState } from "react";

function App() {
  const [word1, setWord1] = useState([]);

  function keyboardHandleClick(keyValue) {
    setWord1([...word1, keyValue]);
  }

  return (
    <div className="App">
      <div>
        <h1 className="text-white font-bold text-3xl pt-1 text-center">Word</h1>
      </div>
      <div className="board-container flex justify-center">
        <div className="board flex flex-col m-2">
          <div className="board-row flex flex-row">

            {word1.map((letter, index) => (
              <WordleBlock value={letter} key={index} type="empty"/>
            ))}

          </div>

        </div>
      </div>

      <div className="keyboard-container">
        <div className="keyboard-row">
          <KeyboardKey value="Q" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="W" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="E" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="R" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="T" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="Y" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="U" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="I" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="O" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="P" clickFunc={keyboardHandleClick}/>
        </div>
        <div className="keyboard-row">
          <KeyboardKey value="A" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="S" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="D" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="F" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="G" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="H" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="J" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="K" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="L" clickFunc={keyboardHandleClick}/>
        </div>
        <div className="keyboard-row">
          <KeyboardKey value="ENTER" special="yes" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="Z" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="X" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="C" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="V" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="B" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="N" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="M" clickFunc={keyboardHandleClick}/>
          <KeyboardKey value="BACK" special="yes" clickFunc={keyboardHandleClick}/>
        </div>
      </div>

    </div>
  );
}

export default App;
