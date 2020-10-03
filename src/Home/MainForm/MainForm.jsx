import React,{useState} from 'react';
import axios from 'axios';
import main from './mainForm.module.css';
import RigthContainers from './BlockRight/blockRight';
import LeftContainers from './BlockLeft/blockLeft';

function MainForm() {
    const[displayCity, setDisplayCity] = useState(false)
    const[fiveCity, setfiveCity] = useState([])
    const[suggestionCity , setSuggestionCity] = useState([])
    const[cityFrom, setCityFrom] = useState([])
    const[cityTo, setCityTo] = useState([])
    const[depart, setDepart] = useState('')
    const[arriver, setArriver] = useState('')
    const[idInput, setIdInput] = useState('')


    const PopCity = (e) =>{
        setfiveCity([])
        setSuggestionCity([])
            setIdInput(e.target.id)

                axios.get(`https://api.comparatrip.eu/cities/popular/5`).then((response)=>{
                    const cityName =  response.data.map(city =>{ return  city.unique_name})
                    setfiveCity(cityName) 
                }).catch((err)=>{ console.log(err) })  
        }

    const suggestion = (e) =>{
        const id = e.target.id
        id === 'depart' ? setDepart(e.target.value) : setArriver(e.target.value);
            setCityFrom([]) ;
            setCityTo([]);
            axios.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${e.target.value}`).then((response)=>{
                const cityChoise = response.data.map(city =>{ return  city.unique_name})
                setSuggestionCity(cityChoise) 
                setIdInput(id)
            }).catch((err)=>{ console.log(err) })

        }     

    const popularTo =()=>{
        if(arriver !== '' && cityFrom.length === 0  ){
            // setCityFrom([])
            axios.get(`https://api.comparatrip.eu/cities/popular/to/${arriver}/5`).then(response =>{
                const city = response.data.map(value =>{ return value.unique_name})
                setCityTo(city)
            })
        }
    }

    const popularFrom =()=>{
        if(depart !== '' && cityTo.length === 0  ){
            // setCityTo([])
            axios.get(`https://api.comparatrip.eu/cities/popular/from/${depart}/5`).then(response =>{
                const city =  response.data.map(value =>{ return value.unique_name})
                setCityFrom(city)
            })
        }
    }

    const From =    (<ul className={main.Ul_F_T}> 
                    {cityFrom.map(from => { return ( <li className={main.Li_F_T} key={from} onClick={()=>setArriver(from)}> {from} </li>)})}
                    </ul>)
    
    const To =  (<ul className={main.Ul_F_T}> 
                {cityTo.map(to => { return ( <li className={main.Li_F_T} key={to} onClick={()=>setDepart(to)}> {to} </li>)})}
                </ul>)

    const choiseCity =  (<ul className={main.Ul}>  
                        {suggestionCity.map(choise =>{ return( 
                        <li className={main.Li} key={choise} onClick={idInput === 'depart' ?()=>setDepart(choise):()=>setArriver(choise)} >{choise} </li>) })} 
                        </ul>)
    
    const cityFive =    (<ul className={main.Ul}>
                        {fiveCity.map(city => {return (
                        <li className={main.Li} key={city} onClick={idInput === 'depart' ? ()=>setDepart(city) : ()=>setArriver(city)}>{city} </li>)})}
                        </ul>)


    const showCity =   suggestionCity.length === 0 && cityFrom.length === 0 && cityTo.length === 0 ? <> {cityFive} </>  : <> {choiseCity} </>
    
    let blockRight = displayCity === false ? <RigthContainers/> : (<div className={main.blockUl}>{showCity}</div>) 
        
    return (
        <div className={main.mainForm}>
            <LeftContainers
                popularTo={popularTo}
                PopCity={PopCity}
                suggestion={suggestion}
                popularFrom={popularFrom}
                display={()=>setDisplayCity(true)}
                depart={depart}
                arriver={arriver}
                To={To}
                From={From}/>
            {blockRight}     
        </div>
    )
}

export default MainForm