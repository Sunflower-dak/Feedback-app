import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import Master from "./components/Master";
import { feedBackObj } from "./lib/types";

function App() {
  const [feedBackObject, setFeedBackObject] = useState<feedBackObj[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToArea = (text: string) => {
    const company = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newObj: feedBackObj = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: company.substring(0, 1).toUpperCase(),
      company: company,
      text: text,
      daysAgo: 0,
    };

    setFeedBackObject([...feedBackObject, newObj]);
  };

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
    <div className="app">
      <Footer />
      <Master
        feedBackObject={feedBackObject}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToArea={handleAddToArea}
      />
      <HashtagList />
    </div>
  );
}

export default App;
