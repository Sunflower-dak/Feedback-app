import { useState } from "react";
import { MAX_CHARACTER } from "../lib/constants";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const characterCount = MAX_CHARACTER - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTER) {
      return;
    }
    setText(newText);
  };

  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="true"
        spellCheck={false}
        value={text}
        onChange={handleChange}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{characterCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
