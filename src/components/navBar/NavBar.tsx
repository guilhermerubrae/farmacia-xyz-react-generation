import { Link, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-neutral-950 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia XYZ</div>

            <div className='flex gap-4'>
              <Link to='/home' className='hover:text-red-700'>Home</Link>
              <div className='hover:text-red-700'>Produtos</div>
              <div className='hover:text-red-700'>Categorias</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar