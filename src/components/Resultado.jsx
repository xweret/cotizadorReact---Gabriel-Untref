import {useCallback, useMemo, useRef} from "react"
import useCotizador from "../hooks/useCotizador"
import {MARCAS,PLANES} from "../constants"
import Guardador from "./Guardador";

function Resultado() {

    const { cotizacion, datos } = useCotizador();
    const {marca, plan, year}= datos;
    //useCallBack para que no se vuelva a ejecutar la funcion si no cambia el valor de cotizacion
    //useCallback recibe una funcion y un array de dependencias..... UseCallback(fn, deps)... 
    const nombreMarca = useCallback(MARCAS.find( p => p.id === Number(marca)), [cotizacion]);
    const nombrePlan =  useCallback(PLANES.find( p => p.id === Number(plan)), [cotizacion]);
    const yearRef = useRef(year); //useRef para que no se vuelva a renderizar "Lo congelo"

    if(cotizacion === 0) return null;

  return (
  
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-2xl uppercase">
            Resumen 
        </h2>
        <p className="my-2">
            <span className="font-bold">Marca: </span>
            {nombreMarca.nombre}
        </p>
        <p className="my-2">
            <span className="font-bold">Plan: </span>
            {nombrePlan.nombre}
        </p>
        <p className="my-2">
            <span className="font-bold">Year: </span>
            {yearRef.current}
        </p>
        <p className="my-2 text-2xl">
            <span className="font-bold">Total Cotizacion: </span>
            {cotizacion}
        </p>
        <Guardador/>
    </div>
    
)
}

export default Resultado