import React from 'react';
import {Alert} from 'react-bootstrap'
import './topalertInfo.css'

const TopAlertInfo = () => (
<a style={{textDecoration:'none'}} href="https://www.thetrainline.com/fr/information/ouverture-ventes-trains/ouverture-des-ventes-sncf-hiver">
    <Alert className='Info'>     
        <span role="img" aria-label="arbre">🎄</span> Dépêchez-vous de réserver vos billets SNCF et OUIGO pour les fêtes, dès le 6 octobre !  
    </Alert>    
</a> 
)

export default TopAlertInfo;