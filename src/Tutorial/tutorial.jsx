import { useState } from "react";
import './style.css'
const Tutorial =(props)=>{
    let [pasoActual, setPasoActual] = useState(0)
    const pasos=['paso 1', 'paso 2', 'paso 3', 'paso 4'];
    
    const proximoPaso =()=>{
        if(pasoActual < pasos.length-1){
        setPasoActual(pasoActual+1)
        }
        else{
            terminarTutorial();
        }
    }

    const pasoAnterior =()=>{
        if(pasoActual > 0){
        setPasoActual(pasoActual-1)
        }
    }

    //Afecta el estado del componente padre, haciendo con que este componente deje de renderizarse.
    const terminarTutorial = ()=>{
        props.setTutorial(false)
    }
   
    return(
        <div>
            <div className='containerTutorial'>
                <p>{pasos[pasoActual]}</p>
                <button onClick={pasoAnterior}>prev</button>
                <button onClick={proximoPaso}>next</button>
                <button onClick={terminarTutorial}>skip</button>
            </div>
        </div>
    )
}

export default Tutorial;