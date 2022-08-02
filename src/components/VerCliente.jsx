import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ErrorLoad from './ErrorLoad';
import Spinner from './Spinner';


const VerCliente = () => {

  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(true);
  const {id} = useParams();

 

  useEffect(()=>{

    const consultarCliente = async () =>{

      try{

        const url = `${import.meta.env.VITE_API_URL}/${id}`;

        const respuesta = await fetch(url);
        const resulta = await respuesta.json();
        setResultado(resulta);


      }
      catch(error){
        console.log(error);
      }

      setTimeout(() => {
        setCargando(false);
      }, 250);
    }

    consultarCliente();


  }, []);



  return (

    cargando ? <Spinner/> : Object.keys(resultado).length === 0 ? <ErrorLoad/> : (
        <div >
        
          <p className="text-3xl font-medium text-gray-600 uppercase">{resultado.nombreCliente}</p>
          <div className="mt-10 md:w-3/4  mx-auto bg-gray-300 border-b p-4">
            <p  className=" font-medium text-gray-600 text-2xl  ">
              Nombre: 
              <span className="">{' ' + resultado.nombreCliente}</span>
            </p>
          </div>
          <div className="md:w-3/4  mx-auto bg-gray-300 border-b p-4">
            <p  className=" font-medium text-gray-600 text-2xl  ">
              Nombre Empresa: 
              <span className="">{' ' + resultado.nombreEmpresa}</span>
            </p>
          </div>
          <div className="md:w-3/4  mx-auto bg-gray-300 border-b p-4">
            <p  className=" font-medium text-gray-600 text-2xl  ">
              Teleofono: 
              <span className="">{' ' + resultado.telefono}</span>
            </p>
          </div>
          <div className="md:w-3/4  mx-auto bg-gray-300 border-b p-4">
            <p  className=" font-medium text-gray-600 text-2xl  ">
              Email: 
              <span className="">{' ' + resultado.email}</span>
            </p>
          </div>

          {resultado.apuntes ?
          (
            <div className="md:w-3/4  mx-auto bg-gray-300 border-b p-4">
            <p  className=" font-medium text-gray-600 text-2xl  ">
              Notas: 
              <span className="">{' ' + resultado.apuntes}</span>
            </p>
          </div>
          ) : 
          null}
          
        

      </div>
    )
  
  )
}

export default VerCliente
