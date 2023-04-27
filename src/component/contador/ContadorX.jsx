import  {React, useState } from 'react'



const suma = () =>{
    setValor(valor+1)
}

const resta = () =>{
    setValor(valor-1)
}

const reset = () =>{
    setValor(0)
}

const [valor, setValor] = useState(0); {
  return (
    <div>
      <h1>Contador</h1>
      <h2>{valor}</h2>
      <button onClick={suma}>Agregar</button>
      <button onClick={resta}>Quitar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  )
}

export default Contador
