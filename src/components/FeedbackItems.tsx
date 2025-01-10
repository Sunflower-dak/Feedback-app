import { TriangleUpIcon } from "@radix-ui/react-icons";
import { feedBackObj } from "../lib/types";

type feedBackObjectProp = { feedBackObj: feedBackObj };

export default function FeedbackItems({ feedBackObj }: feedBackObjectProp) {
  return (
    <>
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>{feedBackObj.upvoteCount}</span>
        </button>
        <div>
          <p>{feedBackObj.badgeLetter}</p>
        </div>
        <div>
          <p>{feedBackObj.company}</p>
          <p>{feedBackObj.text}</p>
        </div>
        {/* <p>{feedBackObj.daysAgo}d</p> */}
        <p>
          {feedBackObj.daysAgo === 0 ? "latest" : `${feedBackObj.daysAgo}d`}
        </p>
      </li>
    </>
  );
}
