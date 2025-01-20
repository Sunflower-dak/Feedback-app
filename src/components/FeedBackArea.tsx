import FeedbackItems from "./FeedbackItems";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { useFeedbackObjectStore } from "../stores/FeedbackItemsStore";

export default function FeedBackArea() {
  const isLoading = useFeedbackObjectStore((state) => state.isLoading);
  const errorMessage = useFeedbackObjectStore((state) => state.errorMessage);
  const getFilteredFeedbacks = useFeedbackObjectStore((state) =>
    state.getFilteredFeedbacks()
  );

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {getFilteredFeedbacks.map((feedBackObj) => (
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
