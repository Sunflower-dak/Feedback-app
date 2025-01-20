import { useEffect } from "react";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import Master from "./components/Master";
import { useFeedbackObjectStore } from "./stores/FeedbackItemsStore";

function App() {
  const getFeedbackObjects = useFeedbackObjectStore(
    (state) => state.getFeedbackObjects
  );

  useEffect(() => {
    getFeedbackObjects();
  }, [getFeedbackObjects]);

  return (
    <div className="app">
      <Footer />
      <Master />
      <HashtagList />
    </div>
  );
}

export default App;
