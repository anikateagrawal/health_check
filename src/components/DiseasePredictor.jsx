import React, { useContext, useState } from "react";
import { url } from "../config";
import { symptoms } from "../context/symptoms";
import Symptom from "./Symptom";
import { durl } from "../config";
import "./DiseasePredictor.scss";

const DiseasePredictor = () => {
  const { diseasesData } = useContext(symptoms);

  async function predict() {
    let arr = [];
    const symptoms = Array.from(document.getElementsByTagName("select"));
    symptoms.map((sym) => (sym.value !== "none" ? arr.push(sym.value) : 1));

    if (arr.length === 0) {
      setResult({
        disease: "Fully Fit and Fine",
        description: "Enjoy Life",
        precautions: ["Avoid Fast Food"],
        symptoms: ["Healthy Lifestyle"],
        specialist: "Parents",
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
    <div className="sym p-6 s2">
      <div>
        <h1>Disease Predictor</h1>
        <h6>Predicting Illnesses for Better Health</h6>
      </div>
      <div className="sym  pred">
        <div className=" ">
          <h5>Please Select all the symptoms</h5>
          <div className="s">
            {Array.from(Array(6).keys()).map((i) => (
              <Symptom key={i} val={i} />
            ))}
          </div>
          <button onClick={predict} className="btn btn-primary">
            Predict
          </button>
        </div>
        <div className="pp1">
          <div>{result !== "" ? <p>Prediction : {result.disease}</p> : ""}</div>
          <div>
            {result !== "" ? (
              <p>Precautions : {result.precautions.join(" , ")}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            {result !== "" ? (
              <p>All Symptoms : {result.symptoms.join(" , ")}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            {result !== "" ? <p>Description : {result.description}</p> : ""}
          </div>
          <div>
            {result !== "" ? (
              <a href={durl + `/doctors/type/${result.specialist}`}>
                <p style={{ color: "white" }}>
                  Specialist : {result.specialist}
                </p>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseasePredictor;
