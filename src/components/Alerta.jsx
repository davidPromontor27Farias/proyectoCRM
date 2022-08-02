import React from 'react'

const Alerta = ({children}) => {
  return (
    <div>
      <p className="text-center mt-3 text-xl bg-red-600 p-2 text-white rounded">{children}</p>
    </div>
  )
}

export default Alerta
