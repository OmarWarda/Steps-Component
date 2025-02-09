import {useState} from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App () {
  const [step, setStep] = useState (1); // (1) is the initial value of the state and useState returns an array
  // const [test, setTest] = useState ({name: 'Omar'});
  const [isOpen, setIsOpen] = useState (true);
  function handlePrevious () {
    if (step > 1) setStep (curStep => curStep - 1);
  }

  function handleNext () {
    if (step < 3) {
      setStep (curStep => curStep + 1);
    }
    // setTest ({name: 'Warda'});
  }

  return (
    <div>
      {/* <Test /> */}
      <button className="close" onClick={() => setIsOpen (isOpen => !isOpen)}>
        &times;
      </button>
      {isOpen &&
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">
            Step: {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{backgroundColor: '#7950f2', color: '#fff'}}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{backgroundColor: '#7950f2', color: '#fff'}}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>}
    </div>
  );
}

// function Test () {
//   return <h1>helpo</h1>;
// }
