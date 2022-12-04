import { useState,createContext } from "react";
import {obtenerDiferenciaYear, calcularMarca,obtenerPlan , formatearDinero} from "../helpers";

// asi se crea un context en react y se exporta para poder usarlo en cualquier componente
// no te olvides del value el contexprovider que por ahi vas a pasar states o funciones 

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: "",

    });

    const [error,setError] = useState("");
    const [cotizacion, setCotizacion] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handlerChangeDatos = (e) => {
   
    setDatos({
        ...datos,
        [e.target.name]: e.target.value,
    })
   
    }

    const cotizarSeguros = () => {

        // una base
        let resultado = 2000;
        // obtener la diferencia de años
        let diferencia = obtenerDiferenciaYear(datos.year);
         // por cada año hay que restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;
               
        resultado = calcularMarca((datos.marca)) * resultado;
        // Europeo 30%
        // americano 15%
        // Asiatico 5%
        resultado = (obtenerPlan(datos.plan) * resultado);
        // basico aumenta 20%
        // completo 50%
        resultado = formatearDinero(resultado);

        setCargando(true);

        setTimeout(() => {
            setCotizacion(resultado);
            setCargando(false);
        }, 1500);
    
    }

    return (
        <CotizadorContext.Provider value={{
            // aqui van los states y funciones que vas a pasar a los componentes
            handlerChangeDatos,
            datos,
            setError,
            error,
            cotizarSeguros,
            cotizacion,
            cargando
        }}>
        {children}
        </CotizadorContext.Provider>
    );
}
// export el provider para poder usarlo en cualquier componente 
export {
    CotizadorProvider
} 

// exporto el context para poder usarlo en cualquier componente 
export default CotizadorContext;