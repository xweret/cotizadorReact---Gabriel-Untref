import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants/";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

function Formulario() {

  const { handlerChangeDatos, datos, error, setError,cotizarSeguros  } = useCotizador();

  const handlerSubmit = (e) => {
    e.preventDefault();
    
    if(Object.values(datos).includes("")) {
     
     setError("Todos los campos son obligatorios");
   
      return;
      
    }

    
    // re inicio error     
    setError("");
    cotizarSeguros()
  }
  

  return (
    <>

    {error ? <Error/> : null}
      <form onSubmit={handlerSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase">
            Marca
          </label>
          <select name="marca" 
                  className="w-full p-3 border border-gray-200"
                  onChange= {(e) => handlerChangeDatos(e)}
                  value={datos.marca}
                  >
            <option value="">-- Seleccione Marca --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 mt-3 font-bold text-gray-500 uppercase">
            Año
          </label>
          <select name="year" 
                  className="w-full p-3 border border-gray-200"
                  onChange= {(e) => handlerChangeDatos(e)}
                  value={datos.year}
                  >
            <option value="">-- Seleccione Año --</option>
            {YEARS.map((years) => (
              <option key={years} value={years}>
                {years}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 mt-3 font-bold text-gray-500 uppercase">
            ELIGE UN PLAN
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label htmlFor="">{plan.nombre}</label>
                <input type="radio" name="plan" value={plan.id}
                onChange= {(e) => handlerChangeDatos(e)} 

                />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          className="w-full bg-indigo-400 hover:bg-indigo-500 transition-colors text-white p-3 font-bold uppercase cursor-pointer"
          
          type="submit"
          value="Cotizar"
          
        />
      </form>
    </>
  );
}
export default Formulario;
