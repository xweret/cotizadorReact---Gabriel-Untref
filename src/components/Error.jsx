import useCotizador from "../hooks/useCotizador"


function Error() {

    const { error } = useCotizador();

  return (
    <div className="border text-center border-red-400 bg-red-100 text-red-600 p-2">
        <p>{error}</p>    
    </div>
  )
}
export default Error