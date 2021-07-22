import { useState } from "react";
import "./styles.css";

const emojiDict = {
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "🖐": "Hand with Fingers Splayed",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salut",
  "👌": "OK Hand",
  "🤏": "Pinching Hande",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand",
  "👈": "Backhand Index Pointing Left",
  "👉": "Backhand Index Pointing Right",
  "👆": "Backhand Index Pointing Up",
  "🖕": "Middle Finger",
  "👇": "Backhand Index Pointing Down",
  "☝": "Index Pointing Up",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "🤛": "Left-Facing Fist",
  "🤜": "Right-Facing Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "✍️": "Writing Hand ",
  "💅": "Nail Polish",
  "🤳": "Selfie",
  "💪": "Flexed Biceps"
  // "😪": "Sleepy Face",
  // "🥵": "Hot Face",
  // "😵": "Dizzy Face",
  // "🥳": "Partying Face",
  // "😕": "Confused Face",
  // "😨": "Fearful Face"
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
      <div className="emoji_list">
        {emojiWeKnow.map((emoji) => {
          return <span onClick={() => emojiClickHandler(emoji)}>{emoji}</span>;
        })}
      </div>
    </div>
  );
}
