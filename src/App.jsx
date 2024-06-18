import Header from "./components/Header"
import InputContainer from "./components/InputContainer"
import { useState } from "react"
import Results from "./components/Results"

function App() {
  const [userInput , setUserInput]  = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
})

let isDurationValid = userInput.duration >= 1

const inputHandler = (inputIdentifier , newValue) => {
setUserInput((prevUserInput) => {
    return {
        ...prevUserInput,
        [inputIdentifier] : + newValue
    }

})
}
  return (
  <div>
    <Header/>
    <InputContainer userInput = {userInput} onChange = {inputHandler}/>
    {!isDurationValid && <p className="center">Please Enter a valid Duration value</p>}
   {isDurationValid && <Results userInput={userInput}/>}
  </div>
    
  )
}

export default App
