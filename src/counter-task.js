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
  function resetAll () {
    setCount (0);
    setStep (1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={e => setStep (Number (e.target.value))}
        />

        <span>Step: {step}</span>

      </div>
      <div>
        <button onClick={decreaseCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={e => setCount (Number (e.target.value))}
        />
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

      {count !== 0 || step !== 1
        ? <div>
            <button onClick={resetAll}>Reset</button>
          </div>
        : null}
    </div>
  );
}
