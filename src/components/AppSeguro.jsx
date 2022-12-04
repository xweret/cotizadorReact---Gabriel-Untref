import Formulario from "./Formulario";
import useCotizador from "../hooks/useCotizador";
import Spiner from "./Spiner";
import Resultado from "./Resultado";

function AppSeguro() {

  const { cotizacion, cargando  } = useCotizador();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de Seguros de Autos - Untref
        </h1>
      </header>
      <main className="bg-white  md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulario/>
        {cargando ? <Spiner/> : <Resultado/>}
      </main>

    </>
  );
}
export default AppSeguro;
