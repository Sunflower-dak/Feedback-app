import FeedbackForm from "./FeedbackForm";
import HeroCopy from "./HeroCopy";
import Logo from "./Logo";
import Pattern from "./Pattern";

export default function Header() {
  return (
    <header>
      <Pattern />
      <Logo />
      <HeroCopy />
      <FeedbackForm />
    </header>
  );
}
