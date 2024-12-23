import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedBackArea() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Comp Name</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            eius natus. Ad ab nulla eos.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
