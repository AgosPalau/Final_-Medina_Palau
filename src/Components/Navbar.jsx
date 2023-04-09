import React, { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)
  const cambiarTema = (theme) => {
    dispatch({ type: 'cambiarTema', theme });
  };
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/favs">Favorites</Link></li>

      </ul>
      <button className='colorButton' onClick={() => cambiarTema(!state.theme)}>{state.theme ? 'Cambiar a iluminado' : ' Cambiar a oscuro'}</button>
    </nav>
  )
}

export default Navbar