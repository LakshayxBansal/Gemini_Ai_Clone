/* eslint-disable react/prop-types */
import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=>{
    const onSent = async(prompt)=>{
       await runChat(prompt)
    }

    onSent("What is Reactjs")

    const contextValue ={

    }
    return(
        <ContextProvider value={contextValue}>
            {props.children}
        </ContextProvider>
    )
}

export default ContextProvider