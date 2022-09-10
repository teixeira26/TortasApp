import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormBase from "../FormBase";
import Tutorial from "../Tutorial/tutorial";
import useCargarNumeroDeBases from "../Utils/cargarNumeroDeBases";
import './home.css';

const Home =  ()=>{
    const navigate=useNavigate();
    const [tutorial, setTutorial] = useState(true);
    const [numeroDeBases, setNumeroDeBases] = useState(0);
    const [bases, setBase] = useState([]);
    const [disenar, setDisenar] = useState(false);
    const agregarBases = (e)=>{
        e.preventDefault()
        let arrayTemporal = []
        if(disenar === true) setDisenar(false)
        for(let n = 0; n<numeroDeBases; n++){
            console.log(bases)
            arrayTemporal = [...arrayTemporal,  {alto:null, ancho:null}] 
        }
        setBase(arrayTemporal)
    }
   
    const agregarDimensiones = (e)=>{
        const [nombreDeLaPropiedad, indiceDeLaPropiedad]= e.target.name.split(' ');
        const valorDeLaPropiedad = e.target.value;
        let arrayTemporal = bases;
        arrayTemporal[indiceDeLaPropiedad][nombreDeLaPropiedad] = valorDeLaPropiedad*10;
    }

    const disenarBases = (e)=>{
        e.preventDefault();
        setDisenar(true);
    }
   
   
    return(
        <div>
            {/* <input type="button" value="Empezar" onClick={()=>navigate('/ji')} />
            <Link to='/jsi'>cambiar ruta</Link> */}
            <form onSubmit={agregarBases}>
                <fieldset>
                    <label htmlFor="">Cuántas bases tendrá tu torta ? <input required type="number" max='10' min='0' placeholder="" onChange={(e)=>setNumeroDeBases(e.target.value)} /></label>
                    <label htmlFor=""><input type="submit" value="Empezar" /></label>
                </fieldset>
            </form>
            {tutorial&&<Tutorial setTutorial={setTutorial}/>}
            <form onSubmit={disenarBases}>
                {bases.length>0&&bases.map((x,y)=>{
                    return (
                        <fieldset key={y+1}>
                            <legend>Base{y}</legend>
                            <label htmlFor="">Ancho: <input required type="number" name={"ancho "+y.toString()}  onChange={agregarDimensiones} min={5} max={80}/></label>
                            <label htmlFor="">Alto: <input required type="number" name={"alto " + y} onChange={agregarDimensiones} min={5} max={80}/></label>
                        </fieldset>
                    )
                })} 
                {bases.length&&<button>Listo</button>}
            </form>
           <div className="bases">
           {disenar&&bases.map((x,y)=>{
            return(
                <div key={y} style={{width:x.ancho, height:x.alto, border:'1px solid black'}}>
                    <input type="file" name="" id="" />
                </div>
            )
           })}
            </div>
        </div>
    )
}

export default Home;