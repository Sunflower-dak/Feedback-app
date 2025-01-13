import { TriangleUpIcon } from "@radix-ui/react-icons";
import { feedBackObj } from "../lib/types";
import { useState } from "react";

type feedBackObjectProp = { feedBackObj: feedBackObj };

export default function FeedbackItems({ feedBackObj }: feedBackObjectProp) {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedBackObj.upvoteCount);

  const handleUpvoteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setUpvoteCount((prev) => prev + 1);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };
  return (
    <>
      <li
        onClick={() => setOpen(!open)}
        className={`feedback ${open ? `feedback--expand` : ""}`}
      >
        <button onClick={handleUpvoteClick}>
          <TriangleUpIcon />
          <span>{upvoteCount}</span>
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
