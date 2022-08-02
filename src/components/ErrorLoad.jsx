import React from 'react'
import Error from '../img/error-404.png'

const ErrorLoad = () => {
  return (
    <div className="flex flex-col  mt-20">
      <img src={Error} alt="icono error" className="w-20 mt-10 mx-auto" />
      <p className="mx-auto mt-4 text-2xl">Ooopps, El id del cliente no existe.</p>
    </div>
  )
}

export default ErrorLoad
