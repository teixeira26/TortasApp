import { useState } from "react";

const useCargarNumeroDeBases = (base)=>{
    const [bases,setBases] = useState(base);
    return(bases);
}

export default useCargarNumeroDeBases;