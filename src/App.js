import {useState} from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App () {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps () {
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
          <StepMessage step={step}>
            {messages[step - 1]}
          </StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>}
    </div>
  );
}
function StepMessage({step, children}) {
  return (
    <div className="message">
      <p className="message">
        <h3>Step: {step}</h3>
        {children}
      </p>
    </div>
  );
}
function Button({textColor, bgColor, onClick, children}) {
  return (
    <button
      style={{backgroundColor: bgColor, color: textColor}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
