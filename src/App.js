import { useState } from 'react';
import './App.css';
import './components/Symptom'
import Symptom from './components/Symptom';
import { url } from './config';
import { SymptomsProvider } from './context/symptoms';
function App() {
  async function predict(){
    let arr=[]
    const symptoms=Array.from(document.getElementsByTagName('select'));
    symptoms.map((sym)=>sym.value!=='none'?arr.push(sym.value):1);

    if(arr.length===0){
      setResult({disease:"Fully Fit and Fine",description:"Enjoy Life",precautions:'Avoid FastFood'});
      return;
    }

    const res=await fetch(url,{
      method: "POST",
      body: JSON.stringify(arr),
      headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        }),
      }).then((res)=>res.json());
    setResult(res);
  }

  const [result,setResult]=useState("");

  return (
    <div className="App">
      <h1>Health Check</h1>
      <h3>Disease Prediction</h3>
      <h5>Please Select all the symptoms</h5>
      <SymptomsProvider>
      {Array.from(Array(5).keys()).map((i)=><Symptom key={i} val={i}/>)}
      </SymptomsProvider>
      <button onClick={predict}>Predict</button>
      <div>{result!==""?<p>Prediction : {result.disease}</p>:""}</div>
      <div>{result!==""?<p>Precautions : {result.precautions.join(" , ")}</p>:""}</div>
      <div>{result!==""?<p>Description : {result.description}</p>:""}</div>
    </div>
  );
}

export default App;
