import { v4 as uuidv4 } from 'uuid';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {Object.keys(options).map(el => (
        <button
          key={uuidv4()}
          type="button"
          name={el}
          onClick={onLeaveFeedback}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
