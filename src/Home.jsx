import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormBase from "./FormBase";
import Tutorial from "./Tutorial/tutorial";
import useCargarNumeroDeBases from "./Utils/cargarNumeroDeBases";

const Home =  ()=>{
    const navigate=useNavigate();
    const [tutorial, setTutorial] = useState(true);
    const [pregunta, setPregunta] = useState(false)
    const agregarDato=(e)=>{
        console.log(obj);
        setObjSettings({...obj,[e.target.name]:e.target.value })
    }
    const preguntar=(e)=>{
        e.preventDefault()
        if(pregunta===false){ 
            setPregunta(true)
        }
        else{
            if(obj.alto && obj.ancho){
                setPregunta(false);

            }
            else{
                alert('falta un dato')

            }

        }
    }
    const [obj, setObjSettings] = useState({
        alto:null,
        ancho:null,
    })
   
    return(
        <div>
            <h1>hola</h1>
            {/* <input type="button" value="Empezar" onClick={()=>navigate('/ji')} />
            <Link to='/jsi'>cambiar ruta</Link> */}
            <form>
                <fieldset>
                    <label htmlFor=""><input type="button" value="Empezar" onClick={preguntar} />   </label>
                </fieldset>
            </form>
            {tutorial&&<Tutorial setTutorial={setTutorial}/>}
            
            {pregunta === true &&
                <form onSubmit={preguntar}>
                <label>Ancho: <input type="text" name='ancho' onChange={agregarDato}/></label>
                <label>Alto: <input type="text" name='alto' onChange={agregarDato}/></label>
                <button>Listo</button>
            </form>
            }
            {obj.alto!==null && obj.ancho!==null&&<div style={{width:obj.ancho*10, height:obj.alto*10, border:'1px solid black', borderRadius:"5px", backgroundImage:'url("https://i.blogs.es/88d74a/kelly-sikkema-yk0hpwwdj1i-unsplash/1366_2000.jpg")', backgroundSize:'cover'}}></div>}

        </div>
    )
}

export default Home;