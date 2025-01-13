import { useState } from "react";
import { MAX_CHARACTER } from "../lib/constants";

type feedbckFormProp = {
  onAddToArea: (text: string) => void;
};

export default function FeedbackForm({ onAddToArea }: feedbckFormProp) {
  const [text, setText] = useState("");
  const characterCount = MAX_CHARACTER - text.length;
  const [validText, setValidText] = useState(false);
  const [inValidText, setInValidText] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTER) {
      return;
    }
    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.includes("#") && text.length >= 5) {
      setValidText(true);
      setTimeout(() => {
        setValidText(false);
      }, 3000);
    } else {
      setInValidText(true);
      setTimeout(() => {
        setInValidText(false);
      }, 3000);
      return;
    }

    onAddToArea(text);
    setText("");
  };

  return (
    <form
      className={`form ${validText ? `form--valid` : ""} ${
        inValidText ? `form--invalid` : ""
      }`}
      onSubmit={handleSubmit}
    >
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
