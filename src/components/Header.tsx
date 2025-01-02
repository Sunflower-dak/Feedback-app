import FeedbackForm from "./FeedbackForm";
import HeroCopy from "./HeroCopy";
import Logo from "./Logo";
import Pattern from "./Pattern";

type headerProp = {
  handleAddToArea: (text: string) => void;
};

export default function Header({ handleAddToArea }: headerProp) {
  return (
    <header>
      <Pattern />
      <Logo />
      <HeroCopy />
      <FeedbackForm onAddToArea={handleAddToArea} />
    </header>
  );
}
