import {useState, useEffect} from 'react'
import Formulario from '../components/Formulario'


const NuevoCliente = () => {
  return (
    <div className="">
      <h1 className="text-center text-2xl uppercase ">Agrega un Nuevo Cliente</h1>
      <p className="mt-10 text-center text-2xl">Completa los Siguientes Campos para Registrar un Cliente</p>
      

      <Formulario/>

    </div>
  )
}

export default NuevoCliente
