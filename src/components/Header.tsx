import { useFeedbackObjectStore } from "../stores/FeedbackItemsStore";
import FeedbackForm from "./FeedbackForm";
import HeroCopy from "./HeroCopy";
import Logo from "./Logo";
import Pattern from "./Pattern";

export default function Header() {
  const addItemToList = useFeedbackObjectStore((state) => state.addItemToList);

  return (
    <header>
      <Pattern />
      <Logo />
      <HeroCopy />
      <FeedbackForm onAddToArea={addItemToList} />
    </header>
  );
}
