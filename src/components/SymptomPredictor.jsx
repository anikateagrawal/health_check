import React, { useState } from 'react'
import { useContext } from 'react'
import { symptoms } from '../context/symptoms'
import { durl } from '../config'

const SymptomPredictor = () => {
    const {diseasesData}=useContext(symptoms);
    const [result, setResult] = useState("");
  return (
    <div className='sym'>
        <h1>Symptoms Predictor</h1>
        <label htmlFor="disease" className='form-label'>Select Disease</label>
        <select name="disease" id="disease" className='form-control' defaultValue="none" onChange={()=>setResult(diseasesData[document.getElementById("disease").value])}>
            <option value="none">None</option>
            {Object.keys(diseasesData).map((d)=>
                <option value={d} key={d}>{d}</option>
            )}
        </select>
        <div>
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
    </div>
  )
}

export default SymptomPredictor