import React, { useEffect } from "react";
import Button from "./Button";
import ScreenOutput from "./ScreenOutput";
import { useState } from "react";
import Title from "./Title";

const Calculator = () => {
  const [equation, setEquation] = useState("");
  const [answer, setAnswer] = useState("");

  const handleClick = (event) => {
    const value = event.target.value;
    console.log("handle click");

    switch (value) {
      case "=": {
        if (equation !== "") {
          let ans = "";

          try {
            ans = eval(equation);
          } catch (error) {
            setAnswer("Math error");
          }
          if (ans === undefined) {
            setAnswer("Math Error");
          } else {
            setAnswer(ans);
            setEquation("");
          }
          break;
        }
        break;
      }
      case "Clear": {
        setAnswer("");
        setEquation("");
        break;
      }

      case "Delete": {
        let str = equation;
        str = str.substring(0, str.length - 1);
        setEquation(str);
        break;
      }

      default: {
        let newEquation = equation + value
        setEquation(newEquation)
        break;
      }
    }
  };

  useEffect( () => {
    console.log("useEffect equation: ", equation);
  },[equation])

  useEffect( () => {
    console.log("useEffect answer: ", answer);
  },[answer])

  return (
    <div className="calcBody">
      <Title />
      <div className="calcDisplay">
        <ScreenOutput equation={equation} answer={answer} />
      </div>
      <div className="calcButtons">
        <div className="calcRow">
          <Button class="offwhite" label={"Delete"} handleClick={handleClick} />
          <Button class="offwhite" label={"Clear"} handleClick={handleClick} />
        </div>
        <div className="calcRow">
          <Button label={"7"} handleClick={handleClick}/>
          <Button label={"8"} handleClick={handleClick}/>
          <Button label={"9"} handleClick={handleClick}/>
          <Button class="offwhite" label={"*"} handleClick={handleClick}/>
        </div>
        <div className="calcRow">
          <Button label={"4"} handleClick={handleClick}/>
          <Button label={"5"} handleClick={handleClick}/>
          <Button label={"6"} handleClick={handleClick}/>
          <Button class="offwhite" label={"-"} handleClick={handleClick}/>
        </div>
        <div className="calcRow">
          <Button label={"1"} handleClick={handleClick}/>
          <Button label={"2"} handleClick={handleClick}/>
          <Button label={"3"} handleClick={handleClick}/>
          <Button class="offwhite" label={"+"} handleClick={handleClick}/>
        </div>
        <div className="calcRow">
          <Button class="offwhite" label={"."} handleClick={handleClick}/>
          <Button label={"0"} handleClick={handleClick}/>
          <Button class="offwhite" label={"/"} handleClick={handleClick}/>
          <Button class="signEqual" label={"="} handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
