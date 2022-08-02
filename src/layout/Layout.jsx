import {Outlet, Link, useLocation} from 'react-router-dom'

const Layout = () => {


  const location = useLocation();




  return (
    <div className="md:flex md:min-h-screen bg-gray-200 ">

      <div className="md:w-1/4 bg-green-800 p-2">
        <h1 className="text-center text-white font-bold mt-6 text-2xl">CRM - CLIENTE APLICACION</h1>

        <nav className="mt-10 ">
          <Link to='/clientes'  className={ `${location.pathname === '/clientes' ? 'text-blue-400' : 'text-white' } block p-2 text-xl uppercase font-bold mt-2 hover:text-blue:300 `}>Clientes</Link>
          <Link to='/clientes/nuevo' className={ `${location.pathname === '/clientes/nuevo' ? 'text-blue-400' : 'text-white' } block p-2 text-xl uppercase font-bold mt-2 hover:text-blue:300 `}>Agregar Cliente</Link>
        </nav>
      </div>

      <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet/>
      </div>

    </div>
  )
}

export default Layout
