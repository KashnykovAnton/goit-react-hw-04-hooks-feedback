export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li>
        <p>Good:</p>
        <p>{good}</p>
      </li>
      <li>
        <p>Neutral:</p>
        <p>{neutral}</p>
      </li>
      <li>
        <p>Bad:</p>
        <p>{bad}</p>
      </li>
      <li>
        <p>Total:</p>
        <p>{total}</p>
      </li>
      <li>
        <p>Positive feedback:</p>
        {total === 0 ? <p>0%</p> : <p>{positivePercentage}</p>}
      </li>
    </ul>
  );
}
