import {useState, useEffect} from 'react'
import {Formik, Form, Field} from 'formik';
import * as YUP from 'yup'
import Alerta from './Alerta';
import {useNavigate} from 'react-router-dom';
import Spinner from './Spinner';

const Formulario = ({resultado, cargando, setCargando}) => {

  

  const navigate = useNavigate();


  const validationClienteSchema = YUP.object().shape({
      nombreCliente: YUP.string()
                          .min(3, "El nombre es muy corto")
                          .max(50, 'El nombre es muy largo')
                          .required("Debe de insertar un nombre"),
      nombreEmpresa: YUP.string()
                          .max(50, "El nombre es muy largo")
                         .required("Debe de insertar el nombre de la empresa"),
      email: YUP.string()
                        .email('Email no valido')
                        .required('Debe de insertar un email'),
      telefono: YUP.number()
                        .positive("El numero no es valido")
                        .integer("El numero no es valido")
                        .typeError("El numero no es valido")
                        .required("Debe de insertar un numero de telefono")


  });

  const sendData = async values =>{

    let respuesta;
  
    try{
      if(Object.keys(resultado).length > 0){

        const url = `${import.meta.env.VITE_API_URL}/${resultado.id}`

        respuesta = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            "Content-type" : "application/json"
          }

        })


      }
      else{

        const url = import.meta.env.VITE_API_URL;

        respuesta = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json"
          }
       })
  
      

    }

    await respuesta.json();
  
    navigate('/clientes')
     


    }catch(error){
      console.log(error)

    }

  }


  return (

    cargando ? <Spinner/> : (

      <div className="md:w-3/4 mx-auto mt-10 bg-white p-5 shadow rounded">
      <Formik
      
        initialValues={
            {
                nombreCliente: resultado.nombreCliente ? resultado.nombreCliente : '',
                nombreEmpresa: resultado.nombreEmpresa ? resultado.nombreEmpresa :  '',
                email: resultado.email ? resultado.email :  '',
                telefono: resultado.telefono ? resultado.telefono : '',
                apuntes: resultado.apuntes ? resultado.apuntes :  ''
            }
        } 
        onSubmit={async (values, {resetForm}) => {
          //Para que espere que se envien los datos y luego resetear el formulario
          await sendData(values)

          //Reseteamos el formulario
          resetForm();
        }}
        enableReinitialize={true}

        validationSchema={validationClienteSchema}
      >
        { ({errors, touched}) => {

          
          return(

              <Form>
              <div>
                  <legend className="uppercase font-medium block mb-2" htmlFor="cliente">Nombre del Cliente: </legend>
                  <Field type='text' className="block w-full bg-gray-100 p-3" id="cliente" name="nombreCliente"/>
                  {errors.nombreCliente && touched.nombreCliente ? (
                      <Alerta>{errors.nombreCliente}</Alerta>
                  ) : null}
              </div>
              <div className="mt-3">
                  <legend className="uppercase font-medium block mb-2" htmlFor="empresa">Nombre de la Empresa: </legend>
                  <Field type='text' className="block w-full bg-gray-100 p-3" id="empresa" name="nombreEmpresa"/>
                  {errors.nombreEmpresa && touched.nombreEmpresa ? (
                      <Alerta>{errors.nombreEmpresa}</Alerta>
                  ) : null}
              </div>
              <div className="mt-3">
                  <legend className="uppercase font-medium block mb-2" htmlFor="email">Email del Cliente: </legend>
                  <Field type='email' className="block w-full bg-gray-100 p-3" id="email" name="email"/>
                  {errors.email && touched.email ? (
                      <Alerta>{errors.email}</Alerta>
                  ) : null}
              </div>
              <div className="mt-3">
                  <legend className="uppercase font-medium block mb-2" htmlFor="telefono">Telefono del Cliente: </legend>
                  <Field type='tel' className="block w-full bg-gray-100 p-3" id="telefono" name="telefono"/>
                  {errors.telefono && touched.telefono ? (
                      <Alerta>{errors.telefono} </Alerta>
                  ) : null}
              </div>
              <div className="mt-3">
                  <legend className="uppercase font-medium block mb-2" htmlFor="apuntes">Apuntes: </legend>
                  <Field type='text' as='textarea' className="block w-full bg-gray-100 p-3" id="apuntes" name="apuntes"/>
      
              </div>


              <input type="submit" value={Object.keys(resultado).length > 0 ? 'Editar' : 'Agregar'} className="block w-full text-center p-3 mt-6 bg-green-700 text-white font-bold uppercase rounded" />
              </Form>
          );

        }}
      </Formik>
    </div>


    )
   
  )
}

//Default props
Formulario.defaultProps = {
  resultado: {},
  setCargando: false
  
}

export default Formulario
