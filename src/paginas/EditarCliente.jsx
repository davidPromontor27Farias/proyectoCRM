import {useState, useEffect} from 'react';
import Formulario from '../components/Formulario';
import {useParams} from 'react-router-dom'
import ErrorLoad from '../components/ErrorLoad';

const EditarCliente = () => {
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(true);

  const {id} = useParams();


  useEffect(()=>{

    const EditarCliente =async ()=>{

      try{

        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resulta = await respuesta.json();

        setResultado(resulta);


      }
      catch(error)
      {
        console.log(error)
      }
      setTimeout(() => {
        setCargando(false);
      }, 350);

      
    }
    EditarCliente();
  });

  

  return (
   
    <div>
      <h1 className="text-center text-2xl uppercase">Edita tus Clientes</h1>

      
      <Formulario
        resultado={resultado}
        cargando={cargando}
      />
      
    </div>
  )
}

export default EditarCliente
