import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import Master from "./components/Master";
import { feedBackObj } from "./lib/types";

function App() {
  const [feedBackObject, setFeedBackObject] = useState<feedBackObj[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectCompany, setSelectCompany] = useState("");

  const filteredFeedbackItems = selectCompany
    ? feedBackObject.filter(
        (feedbackObject) => feedbackObject.company === selectCompany
      )
    : feedBackObject;

  const companyList = feedBackObject
    .map((item) => item.company)
    .filter((company, index, array) => {
      return array.indexOf(company) === index;
    });

  const handleAddToArea = async (text: string) => {
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

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newObj),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleSelectCompany = (company: string) => {
    setSelectCompany(company);
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
        feedBackObject={filteredFeedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToArea={handleAddToArea}
      />
      <HashtagList
        companyList={companyList}
        handleSelectCompany={handleSelectCompany}
      />
    </div>
  );
}

export default App;
