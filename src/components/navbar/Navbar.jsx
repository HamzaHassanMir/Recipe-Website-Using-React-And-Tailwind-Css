import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/Index'

const Navbar = () => {
  
  const {searchParam,setSearchParam,handleSubmit} = useContext(GlobalContext);

  return (
    <nav className='flex justify-between items-center py-5 
    container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>

      <h2 className='text-2xl font-semibold hover:text-yellow-500'>
        <NavLink to={'/'}>
        Food Recipe
        </NavLink>
      </h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name='search' placeholder='Enter Dish....' className='bg-white/75
        p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-black focus:shadow-black-200'
        value={searchParam} 
        onChange={(event)=> setSearchParam(event.target.value)}/>
      </form>

      <ul className='flex gap-5'>
      
      <li>
        <NavLink to={'/'} className='text-white hover:text-gray-400 duration-300'>
        Home
        </NavLink>
      </li>

      <li>
        <NavLink to={'/Favorites'} className='text-white hover:text-gray-400 duration-300'>
        Favorites
        </NavLink>
      </li>
      
      </ul>

    </nav>
  )
}

export default Navbar
