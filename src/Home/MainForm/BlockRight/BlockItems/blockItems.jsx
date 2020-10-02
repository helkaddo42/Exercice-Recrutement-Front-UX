import React from 'react';
import main from '../../mainForm.module.css'

const BlockItems = (props) => (
    <div className={props.css}>
        <div className={main.pix}>
            <img style={{height:'50px',width:'50px'}} src={props.img} alt={props.alt} ></img>
            <div className={main.text}> 
                <h3>{props.h3}</h3>
                <h4>{props.h4}</h4>
            </div>
        </div>
        {props.alt === 'padlock' && <hr/>}
    </div>
)

export default BlockItems;