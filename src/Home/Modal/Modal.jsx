import React from 'react'
import {Modal} from 'react-bootstrap'
import logo from '../../Picture/logo.png'

const MyModal = (props) => {   

    return (
    <Modal 
        onHide={props.click}
        show={props.modal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header style={{border:'none'}}>
            <img style={{width:'200px', margin:'auto'}}src={logo} alt='rrr'/>
          <Modal.Title id="contained-modal-title-vcenter">    
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{border:'none'}}>
            <h4 style={{textAlign:'center'}}>Notre site fait peau neuve</h4>
            <p>
                <strong> Vous avez un compte ? Connectez-vous</strong> Pour retrouvez vos informations enregistrées et profitez de toutes les nouvelles fonctionnalités
            </p>
        </Modal.Body>
        <Modal.Footer style={{flexDirection:'column',padding:'15px',border:'none'}}>
            <a style={{width:'250px', height:'56px', backgroundColor:'#00A88F'}} className='btn btn-secondary btn-lg btn-block' href="https://www.thetrainline.com/fr" >
                Se connecter
            </a>
            <button style={{width:'250px', height:'56px', backgroundColor:'#fff',color:'grey'}} className='btn btn-secondary btn-lg btn-block' onClick={props.click}>
                Passer
            </button>
        </Modal.Footer>
    </Modal>
    )
}

export default MyModal;

