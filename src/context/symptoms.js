import axios from 'axios';
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
        const res=(await axios.get(url)).data;
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