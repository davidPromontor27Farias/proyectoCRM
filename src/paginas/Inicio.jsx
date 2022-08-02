import {useState, useEffect} from 'react';
import Cliente from '../components/Cliente';


const Inicio = () => {

  const [resultados, setResultados] = useState([]);


  useEffect(()=> {

    const consultarClientes =async() =>{


      try{  
        const url = import.meta.env.VITE_API_URL;

        const respuesta = await fetch(url);
        const resulta = await respuesta.json();

        setResultados(resulta);

      }
      catch(error){

        console.log(error);
      }


    }

    consultarClientes();

  }, []);

  const eliminarCliente = async  id =>{
    
    try{

      const url = `${import.meta.env.VITE_API_URL}/${id}`;

      const confirmar = confirm('¿Deseas eliminar el cliente?');

      if(confirmar){
        
        const del = await fetch(url, {
          method: 'DELETE'
        });
  
        await del.json();
        
  
        const arrayResultados = resultados.filter( resultado => resultado.id !== id);
        setResultados(arrayResultados);
        

      }

     
    }
    catch(error){
      console.log(error);
    }
  }


  return (
    <div>
      <h1 className="text-center text-2xl uppercase "> Administra tus cliente</h1>
      

      <table className="table-auto mt-10 w-full shadow bg-white rounded">
        
        <thead className='bg-green-700 text-white'>
          <tr>
            <th className="p-2">Nombre Cliente</th>
            <th className="p-2">Nombre Empresa</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Acciones</th>
          </tr>

        </thead>

        <tbody>
          {resultados.map( resultado => (
          <Cliente 
            resultado={resultado}
            key={resultado.id}
            eliminarCliente={eliminarCliente}
            />)
          )}
        </tbody>

      </table>

      
    </div>
  )
}

export default Inicio
