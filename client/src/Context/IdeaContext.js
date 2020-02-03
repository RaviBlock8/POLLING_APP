import React,{useState,createContext} from 'react'

import data from '../data/data'

export const IdeaContext=new createContext();

export const IdeaProvider=(props)=>{
    
    let [ideas,setIdeas]=useState(data)
    
    return (
        <IdeaContext.Provider value={[ideas,setIdeas]}>
            {props.children}
        </IdeaContext.Provider>
    )
}

export default IdeaContext
