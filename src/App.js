import { useState } from "react";
import "./App.css";
import "./components/Symptom";
import Symptom from "./components/Symptom";
import { url } from "./config";
import { SymptomsProvider } from "./context/symptoms";
import Nav from "./components/Nav";

function App() {
  async function predict() {
    let arr = [];
    const symptoms = Array.from(document.getElementsByTagName("select"));
    symptoms.map((sym) => (sym.value !== "none" ? arr.push(sym.value) : 1));

    if (arr.length === 0) {
      setResult({
        disease: "Fully Fit and Fine",
        description: "Enjoy Life",
        precautions: ["Avoid FastFood"],
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
    setResult(res);
  }

  const [result, setResult] = useState("");

  return (
    <div className="App">
      <Nav />
      <div className="sym">
        <div className="m-1">
          <h3>Symptom Wizard</h3>
          <p>Predicting Illnesses for Better Health</p>
        </div>
        <h5>Please Select all the symptoms</h5>
        <div className="s">
        <SymptomsProvider >
          {Array.from(Array(6).keys()).map((i) => (
            <Symptom key={i} val={i} />
          ))}
        </SymptomsProvider>
        </div>
        <button onClick={predict} className="btn btn-primary">Predict</button>
        <div>{result !== "" ? <p>Prediction : {result.disease}</p> : ""}</div>
        <div>
          {result !== "" ? (
            <p>Precautions : {result.precautions.join(" , ")}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          {result !== "" ? <p>Description : {result.description}</p> : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
