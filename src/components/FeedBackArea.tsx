import { useEffect, useState } from "react";
import FeedbackItems from "./FeedbackItems";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedBackArea() {
  const [feedBackObject, setFeedBackObject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchFeedbackData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      setFeedBackObject(data.feedbacks);
    } catch {
      setErrorMessage("This is an error! Try again🫠");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedbackData();
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {feedBackObject.map((feedBackObj) => (
        <FeedbackItems key={feedBackObj.id} feedBackObj={feedBackObj} />
      ))}
    </ol>
  );
}

// () => {
//   setIsLoading(true);
//   fetch(
//     "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
//   )
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error();
//       }
//       return res.json();
//     })
//     .then((data) => {
//       setFeedBackObject(data.feedbacks);
//       setIsLoading(false);
//     })
//     .catch(() => {
//       setErrorMessage("This is an error! Try again🫠");
//       setIsLoading(false);
//     });
// }
