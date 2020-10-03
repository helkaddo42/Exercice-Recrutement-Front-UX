import React,{useState,useEffect } from 'react';
import Header from '../Home/Header/Header'
import MainTitle from '../Home/MainTitle/MainTitle'
import MainForm from '../Home/MainForm/MainForm'
import home from './home.module.css'
import MyModal from './Modal/Modal'
import TopAlertInfo from './TopAlertInfo/AlertInfo'


const Home = () => {

    const [showModal, setShowModal] = useState(false);
  
        useEffect(() => {
            const Firstvisit = localStorage.getItem('premiereVisite');
            if(Firstvisit) {
                setShowModal(false)
            } else {
                 localStorage.setItem('premiereVisite',true);
                setShowModal(true)
            }
        },[])

    return(
        
        <div className={home.home}>
            <TopAlertInfo />
            <Header />
            <MainTitle />
            <MyModal click={()=>setShowModal(false)} modal={showModal} />
            <MainForm />
        </div>
    )
}



export default Home;