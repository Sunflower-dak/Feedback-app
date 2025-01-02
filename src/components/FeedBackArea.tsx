import FeedbackItems from "./FeedbackItems";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { feedBackObj } from "../lib/types";

type feedbckAreaProp = {
  isLoading: boolean;
  errorMessage: string;
  feedBackObject: feedBackObj[];
};

export default function FeedBackArea({
  isLoading,
  errorMessage,
  feedBackObject,
}: feedbckAreaProp) {
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
