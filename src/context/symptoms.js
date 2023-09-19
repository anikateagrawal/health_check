import React, { createContext, useEffect, useState } from 'react'
import { url } from '../config';

export const symptoms=createContext();

export const SymptomsProvider=({children})=>{

    const [data,setData]=useState([]);
    async function columns(){
        const res=await fetch(url,{
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
              }),
        }).then((res)=>res.json());
        setData(res);
    }
    useEffect(()=>{
        columns()
    },[]);

    return <symptoms.Provider value={{data}}>{children}</symptoms.Provider>
}