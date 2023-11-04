import React, { useContext, useState } from 'react'
import { url } from '../config';
import { symptoms } from '../context/symptoms';
import Symptom from './Symptom';
import { durl } from '../config';

const DiseasePredictor = () => {
    const {diseasesData}=useContext(symptoms);

  async function predict() {
    let arr = [];
    const symptoms = Array.from(document.getElementsByTagName("select"));
    symptoms.map((sym) => (sym.value !== "none" ? arr.push(sym.value) : 1));

    if (arr.length === 0) {
      setResult({
        disease: "Fully Fit and Fine",
        description: "Enjoy Life",
        precautions: ["Avoid Fast Food"],
        symptoms:['Healthy Lifestyle'],
        specialist:"Parents"
      });
      return;
    }

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(arr),
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    }).then((res) => res.json());
    setResult(diseasesData[res]);
  }

  const [result, setResult] = useState("");

  return (
    <div className='sym'>
        <div className="m-1">
          <h3>Disease Predictor</h3>
          <p>Predicting Illnesses for Better Health</p>
        </div>
        <h5>Please Select all the symptoms</h5>
        <div className="s">
        
          {Array.from(Array(6).keys()).map((i) => (
            <Symptom key={i} val={i} />
          ))}
        </div>
        <button onClick={predict} className="btn btn-primary">Predict</button>
        <div>{result !== "" ? <p>Prediction : {result.disease}</p> : ""}</div>
        <div>
          {result !== "" ? (<p>Precautions : {result.precautions.join(" , ")}</p>):("")}
        </div>
        <div>
          {result !== "" ? (<p>All Symptoms : {result.symptoms.join(" , ")}</p>) : ("")}
        </div>
        <div>
          {result !== "" ? <p>Description : {result.description}</p> : ""}
        </div>
        <div>
          {result !== "" ? <a href={durl+`/doctors/type/${result.specialist}`}><p>Specialist : {result.specialist}</p></a> : ""}
        </div>
    </div>
  )
}

export default DiseasePredictor