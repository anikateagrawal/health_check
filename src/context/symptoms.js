import React, { createContext, useEffect, useState } from 'react'
import { url } from '../config';

export const symptoms=createContext();

export const SymptomsProvider=({children})=>{
    const [diseasesData,setDiseasesData]=useState({"":{
        description: "Enjoy Life",
        precautions: ["Avoid Fast Food"],
        symptoms:['Healthy Lifestyle'],
        specialist:"Parents"
      }})
    const [data,setData]=useState([]);
    async function columns(){
        const res=await fetch(url,{
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
              }),
        }).then((res)=>res.json());
        setData(res[0]);
        res[1]['none']={
            description: "Enjoy Life",
            precautions: ["Avoid Fast Food"],
            symptoms:['Healthy Lifestyle'],
            specialist:"Parents"
          };
        setDiseasesData(res[1]);
    }
    useEffect(()=>{
        columns()
    },[]);

    return <symptoms.Provider value={{data,diseasesData}}>{children}</symptoms.Provider>
}