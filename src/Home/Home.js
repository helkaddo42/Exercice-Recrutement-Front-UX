import React from 'react'
import Header from '../Home/Header/Header'
import MainTitle from '../Home/MainTitle/MainTitle'
import MainForm from '../Home/MainForm/MainForm'

import home from './home.module.css'

function Home() {
    return (
        <div className={home.home}>
            <Header />
            <MainTitle />
            <MainForm />
        </div>
    )
} 

export default Home
