import React from 'react'
import {NavLink} from 'react-router-dom';
import flag from '../../Picture/flag.svg'
import './header.css'

function Header() {
    return (
        <header className='toolbar'>
              <nav className='nav'>

                    <div className='titleHeader'>
                        <NavLink to="/Home"><h2>trainline</h2></NavLink>
                    </div> 

                    <div className='space'></div>

                    <div className='items'>
                        <ul>
                            <li> <NavLink to='/'> <img src={flag} alt="flag"/> FR / EUR </NavLink> </li>
                            <li><NavLink to='/'> Business </NavLink> </li> 
                            <li> <NavLink to='/'>Aide</NavLink> </li>
                            <li> <NavLink to='/'>Achat carte ou abonnement</NavLink> </li>
                            <li> <NavLink to='/'>Créer un compte <button style={{fontWeight:'bold'}} className='btn btn-light btn-sm'> Se connecter </button> </NavLink> </li>
                        </ul>
                    </div>   

                 </nav>
                                


        </header>
    )
}

export default Header
