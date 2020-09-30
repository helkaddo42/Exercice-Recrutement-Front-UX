import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import price from '../../Picture/price.png'
import loyalty from '../../Picture/loyalty.png'
import padlock from '../../Picture/padlock.png'
import google from '../../Picture/google.png'
import apple from '../../Picture/apple.png'
import main from './mainForm.module.css'

function MainForm() {
    const[popularCity, setpopularCity] = useState([])
    const[depart, setDepart] = useState('')
    const[displayCity, setDisplayCity] = useState(false)

    const popularCityFive = () =>{

        axios.get(`https://api.comparatrip.eu/cities/popular/5`).then((response)=>{
            const valueResponse = response.data
            const cityName = valueResponse.map(city =>{ return  city.unique_name})
            setpopularCity(cityName) 
        }).catch((err)=>{ console.log(err) })
    }
  
    const cityName = (
        <ul className={main.Ul}>
            {popularCity.map(city => {
                return (
                    <li className={main.Li} key={city} onClick={()=>setDepart(city)} >{city} </li>
                )
            })}
        </ul>
    )
    
    const showFiveCityPop = popularCity && displayCity ? (<span style={{color:'red'}}> {cityName} </span>) : null
    
    let show = displayCity === false  ?
            (<div className={main.containerRight}>
                <div className={main.price}>
                    <div className={main.pix}>
                        <img style={{height:'50px',width:'50px'}} src={price} alt='price' ></img>
                            <div className={main.text}> 
                                <h3>Trouvez le meilleur prix pour votre trajet</h3>
                                <h4>Comparez et réservez vos billets pour voyager avec SNCF, OUIGO, Eurostar et plus de 200 autres transporteurs.</h4>
                            </div>
                    </div>
                </div>
                
                <div className={main.loyalty}>
                    <div className={main.pix}>
                        <img style={{height:'50px',width:'50px'}} src={loyalty} alt='loyalty' ></img>
                            <div className={main.text}> 
                                <h3>Trouvez le meilleur prix pour votre trajet</h3>
                                <h4>Comparez et réservez vos billets pour voyager avec SNCF, OUIGO, Eurostar et plus de 200 autres transporteurs.</h4>
                            </div>
                    </div>
                </div>

                <div className={main.padlock}>
                    <div className={main.pix}>
                        <img style={{height:'50px',width:'50px'}} src={padlock} alt='padlock' ></img>
                            <div className={main.text}> 
                                <h3>Trouvez le meilleur prix pour votre trajet</h3>
                                <h4>Comparez et réservez vos billets pour voyager avec SNCF, OUIGO, Eurostar et plus de 200 autres transporteurs.</h4>
                            </div>
                    </div>
                <hr/>

                </div>

                    <div className={main.leader}>
                        <h4>L'app leader en Europe pour voyager en train et en bus</h4>
                    </div>

                    <div className={main.app}>
                    <NavLink to='/' ><img style={{height:'100px',width:'150px'}} src={apple} alt=""/></NavLink> 
                    <NavLink to='/' ><img style={{height:'100px',width:'150px'}} src={google} alt=""/></NavLink> 
                    </div>

            </div>) 
            : 
            (<div className={main.blockUl}> {showFiveCityPop}</div>)

        const changed = (e) => {
            console.log(e.target.value)
            setDepart(e.target.value);
            axios.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${e.target.value}`).then((response)=>{
                const valueResponse = response.data
                console.log(response.data)
                const cityName = valueResponse.map(city =>{ return  city.unique_name})
                setpopularCity(cityName) 
            }).catch((err)=>{ console.log(err) })
        }

    return (
        <div className={main.mainForm}>
            <div className={main.formLeft} onClick={()=> setDisplayCity(!displayCity)}>
                <div className={main.inputBox}>
                    <input
                        value={depart}
                        id='login'
                        type='text' 
                        placeholder='Départ'
                        onClick={popularCityFive}
                        onChange={changed}
                        />
                    </div>
                <div className={main.inputBox}>
                    <input
                        id='login'
                        type='text' 
                        placeholder='Arrivée'
                        onClick={popularCityFive}/>
                </div>
                <div style={{width:'90%', margin:'auto'}}>
                    <button style={{width:'100%', height:'56px', padding:'3px 24px, 0px',margin:'auto', backgroundColor:'#00A88F'}} className='btn btn-secondary btn-lg btn-block'>
                        Rechercher
                    </button>
                </div>
            </div>
            {show}     
        </div>
    )
}

export default MainForm
