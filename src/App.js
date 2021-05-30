import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Similing",
  "😳": "Disbelief",
  "😔": "Sad",
  "🔥": "Lit",
  "🥺": "Pleading Face",
  "😑": "Expressionless"
};

export default function App() {
  var [meaning, setEmojiInput] = useState("");

  var emojiList = Object.keys(emojiDictionary);

  function inputEmojiHandler(e) {
    var emojiInput = e.target.value;

    var meaning = emojiDictionary[emojiInput];

    if (meaning === undefined) {
      meaning = "Sorry could not recognize!";
    }

    setEmojiInput(meaning);
  }

  function clickToGetemojiMeaning(item) {
    var meaning = emojiDictionary[item];
    setEmojiInput(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input className="input" onChange={inputEmojiHandler} />
      <br />
      <h2>{meaning}</h2>
      <h3>Emojis We Know! </h3>
      {emojiList.map((item) => {
        return (
          <span className="emojis" onClick={() => clickToGetemojiMeaning(item)}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
