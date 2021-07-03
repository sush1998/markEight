import { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😪": "Sleepy Face",
  "🥵": "Hot Face",
  "😵": "Dizzy Face",
  "🥳": "Partying Face",
  "😕": "Confused Face",
  "😨": "Fearful Face"
};

const emojiWeKnow = Object.keys(emojiDict);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning = "Dont have this in Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={inputChangeHandler} />
      <h2>{meaning}</h2>
      <h3>Emoji we know</h3>
      {emojiWeKnow.map((emoji) => {
        return <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>;
      })}
    </div>
  );
}
