import React from 'react';
import price from '../../../Picture/price.png'
import loyalty from '../../../Picture/loyalty.png'
import padlock from '../../../Picture/padlock.png'
import google from '../../../Picture/google.png'
import apple from '../../../Picture/apple.png'
import main from '../mainForm.module.css'
import { NavLink } from 'react-router-dom'
import BlockItems from './BlockItems/blockItems';

const Rigth = () => {
    return (
        <div className={main.containerRight}>
            <BlockItems 
                css={main.price}
                img={price}
                alt='price'
                h3='Trouvez le meilleur prix pour votre trajet'
                h4='Comparez et réservez vos billets pour voyager avec SNCF, OUIGO, Eurostar et plus de 200 autres transporteurs.'/>

            <BlockItems 
                css={main.loyalty}
                img={loyalty}
                alt='loyalty'
                h3='Obtenez vos points de fidélité et vos réductions'
                h4="Nous acceptons les cartes de réduction et abonnements SNCF et bien d'\autres encore."/>

            <BlockItems 
                css={main.padlock}
                img={padlock}
                alt='padlock'
                h3='Payez en toute sécurité'
                h4='Nous acceptons PayPal, Apple Pay, Visa, Amex et toutes les cartes bancaires internationales.'/>
               
            <div className={main.leader}>
                <h4>L'app leader en Europe pour voyager en train et en bus</h4>
            </div>

            <div className={main.app}>
                <NavLink to='/' ><img style={{height:'100px',width:'150px'}} src={apple} alt=""/></NavLink> 
                <NavLink to='/' ><img style={{height:'100px',width:'150px'}} src={google} alt=""/></NavLink> 
            </div>
        </div>
    )
}

export default Rigth;