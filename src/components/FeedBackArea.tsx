import { feedBackObject } from "../lib/feebackItemObject";
import FeedbackItems from "./FeedbackItems";

export default function FeedBackArea() {
  return (
    <ol className="feedback-list">
      {feedBackObject.map((feedBackObj) => (
        <FeedbackItems feedBackObj={feedBackObj} />
      ))}
    </ol>
  );
}
