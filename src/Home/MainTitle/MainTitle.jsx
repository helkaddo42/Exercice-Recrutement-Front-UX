import React from 'react'
import {NavLink} from 'react-router-dom';
import title from './mainTitle.module.css'


function MainTitle() {
    return (
        <div className={title.mainTitle} >
                <h2 >Récup’ Retard</h2>
                <h4 >En cas de retard, ne passez plus à côté d’une compensation : nous facilitons votre demande. <NavLink to='/'>En savoir plus</NavLink> </h4>
        </div>
    )
}

export default MainTitle
