import React from 'react';
import main from '../mainForm.module.css';
import train from '../../../Picture/train.png';

const BlockLeft = (props) => {
    return (
        <div className={main.formLeft}>
            <div className={main.blockInput} onClick={props.display}>
                <p className={main.labelInput}>Depart</p>
                <input
                    className={main.Input}
                    value={props.depart}
                    id='depart'
                    type='text' 
                    placeholder='Gare ou Ville'
                    onFocus={props.popularTo}
                    onClick={props.PopCity}
                    onChange={props.suggestion}
                    />
            </div>
            {props.To}

            <div className={main.blockInput} onClick={props.display}>
                <p className={main.labelInput}>Arrivée</p>
                <input
                    value={props.arriver}
                    className={main.Input}
                    id='arriver'
                    type='text' 
                    placeholder='Gare ou Ville'
                    onFocus={props.popularFrom}
                    onChange={props.suggestion}
                    onClick={props.PopCity}
                    />
            </div>
            {props.From}
        
            <img style={{height:'100px',width:'350px'}} src={train} alt='train' />
            <div style={{width:'100%'}}>
                <button style={{width:'100%', height:'56px', padding:'3px 24px, 0px',margin:'auto', backgroundColor:'#00A88F'}} className='btn btn-secondary btn-lg btn-block'>
                    Rechercher
                </button>
            </div>
        </div>
    )
}

export default BlockLeft;