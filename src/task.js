import {useState} from 'react';
import './styles.css';

export default function App () {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter () {
  const [step, setStep] = useState (1);
  const [count, setCount] = useState (0);

  const date = new Date ('june 21 2027');
  date.setDate (date.getDate () + count);

  function increaseCount () {
    setCount (c => c + step);
  }
  function decreaseCount () {
    setCount (c => c - step);
  }

  return (
    <div>
      <div>
        <button onClick={() => setStep (s => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep (s => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={decreaseCount}>-</button><span>Count: {count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <p>
        {count === 0
          ? 'Today is: '
          : count > 0
              ? `${count} days from today is `
              : `${Math.abs (count)} days ago was `}

        <span>{date.toDateString ()}</span>
      </p>
    </div>
  );
}
