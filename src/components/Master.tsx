import { feedBackObj } from "../lib/types";
import FeedBackArea from "./FeedBackArea";
import Header from "./Header";

type drillProp = {
  isLoading: boolean;
  errorMessage: string;
  feedBackObject: feedBackObj[];
  handleAddToArea: (text: string) => void;
};

export default function Master({
  isLoading,
  errorMessage,
  feedBackObject,
  handleAddToArea,
}: drillProp) {
  return (
    <main className="container">
      <Header handleAddToArea={handleAddToArea} />
      <FeedBackArea
        isLoading={isLoading}
        errorMessage={errorMessage}
        feedBackObject={feedBackObject}
      />
    </main>
  );
}
