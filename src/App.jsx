import Header from "./Components/Header";
import Results from "./Components/Results";
import UserInputs from "./Components/UserInputs";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p>please enter duration greter than Zero</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
