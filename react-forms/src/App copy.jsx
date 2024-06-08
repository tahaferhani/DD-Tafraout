import { useState } from 'react'
import './App.css'
import BMI1 from "./images/bmi 1.jpeg";
import BMI2 from "./images/bmi 2.jpeg";
import BMI3 from "./images/bmi 3.jpeg";
import BMI4 from "./images/bmi 4.jpeg";
import BMI5 from "./images/bmi 5.jpeg";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imgSource, setImgSource] = useState("");

  const onCalculate = () => {
    const bmi = weight / height**2;
    if (bmi < 18.5)
      setImgSource(BMI1);
    else if (bmi >= 18.5 && bmi < 25)
      setImgSource(BMI2);
    else if (bmi >= 25 && bmi < 30)
      setImgSource(BMI3);
    else if (bmi >= 30 && bmi < 35)
      setImgSource(BMI4);
    else
      setImgSource(BMI5);
  }

  /*
    <18.5 Underweight
    >=18.5 et <25 Normal
    >=25 et <30 Overweight
    >=30 et <35 Obese
    >35 Extremly Obese
  */

  return (
    <>
      <form>
        <input type="text" placeholder='Weight' value={weight} onChange={e => setWeight(e.target.value)} />
        <input type="text" placeholder='Height' value={height} onChange={e => setHeight(e.target.value)} />
        <button type="button" onClick={onCalculate}>Calculate</button>
      </form>

      <img width={100} src={imgSource}/>
    </>
  )
}

export default App
