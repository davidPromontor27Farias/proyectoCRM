import React from 'react'
import {useNavigate} from 'react-router-dom'

const Cliente = ({resultado, eliminarCliente}) => {

    const navigate = useNavigate();

    const {nombreCliente, nombreEmpresa, telefono, email, id} = resultado;


     return (

      <tr className="border-b hover:bg-gray-300 text-center " >
        <td className="p-2 ">{nombreCliente}</td>
        <td className="p-2">{nombreEmpresa}</td>
        <td className="p-2">
            <p>Telefono: <span className="text-gray-800 uppercase font-medium">{telefono}</span></p>
            <p>Email: <span className="text-gray-800  font-medium">{email}</span></p>
        </td>
        <td className="p-2">
            <button onClick={ () => navigate(`/clientes/${id}`)} className="w-full text-center uppercase mb-2 bg-yellow-500 text-xs font-medium rounded p-2 text-white" type="button">Ver</button>
            <button onClick={ () => navigate(`/clientes/editar/${id}`)} className="w-full text-center uppercase mb-2 bg-green-600 text-xs font-medium rounded p-2 text-white" type="button">Editar</button>
            <button onClick={() => eliminarCliente(id)} className="w-full text-center uppercase mb-2 bg-red-500 text-xs font-medium rounded p-2  text-white" type="button">Eliminar</button>
        </td>

      </tr>

  )
}

export default Cliente
