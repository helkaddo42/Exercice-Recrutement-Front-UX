import React,{useState } from 'react';
import axios from 'axios';
import main from './mainForm.module.css';
import RigthContainers from './BlockRight/blockRight';
import LeftContainers from './BlockLeft/blockLeft';

function MainForm() {
    const[displayCity, setDisplayCity] = useState(false)
    const[fiveCity, setfiveCity] = useState([])
    const [suggestionCity , setSuggestionCity] = useState([])
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
            const valueResponse = response.data
            const cityName = valueResponse.map(city =>{ return  city.unique_name})
            setfiveCity(cityName) 
        }).catch((err)=>{ console.log(err) })  
    }

    const suggestion = (e) =>{
        const id = e.target.id
        if(id === 'depart'){
            setCityTo([])
            setDepart(e.target.value)
            axios.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${e.target.value}`).then((response)=>{
                const valueResponse = response.data
                const cityChoise = valueResponse.map(city =>{ return  city.unique_name})
                setSuggestionCity(cityChoise) 
                setIdInput('depart')
            }).catch((err)=>{ console.log(err) })

        } else{
            setArriver(e.target.value)
            setCityFrom([])
            axios.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${e.target.value}`).then((response)=>{
                const valueResponse = response.data
                const cityChoise = valueResponse.map(city =>{ return  city.unique_name})
                setSuggestionCity(cityChoise) 
                setIdInput('arriver')
            }).catch((err)=>{ console.log(err) })
        }     
   
    }

    const popularTo =(e)=>{
        if(arriver !== '' && cityFrom.length === 0  ){
            setCityFrom([])
            axios.get(`https://api.comparatrip.eu/cities/popular/to/${arriver}/5`).then(response =>{
                const from = response.data
                const city = from.map(value =>{ return value.unique_name})
                setCityTo(city)
            })
        }
    }

    const popularFrom =(e)=>{
        if(depart !== '' && cityTo.length === 0  ){
            setCityTo([])
            axios.get(`https://api.comparatrip.eu/cities/popular/from/${depart}/5`).then(response =>{
                const from = response.data
                const city = from.map(value =>{ return value.unique_name})
                setCityFrom(city)
            })
        }
    }

    const From = ( <ul className={main.Ul_F_T}> {cityFrom.map(from => { return ( <li className={main.Li_F_T} key={from} onClick={()=>setArriver(from)}> {from} </li>)})}</ul>)
    const To = ( <ul className={main.Ul_F_T}> {cityTo.map(to => { return ( <li className={main.Li_F_T} key={to} onClick={()=>setDepart(to)}> {to} </li>)})}</ul>)

    let choise =''
    if(idInput === 'depart'){
         choise = ( <ul className={main.Ul}>  {suggestionCity.map(choise => { return ( <li className={main.Li} key={choise} onClick={()=>setDepart(choise)} >{choise} </li>) })} </ul>)
    }else{
        choise = ( <ul className={main.Ul}>  {suggestionCity.map(choise => { return ( <li className={main.Li} key={choise} onClick={()=>setArriver(choise)} >{choise} </li>) })} </ul>)
    }
    
    let cityName=''
    if(idInput === 'depart'){
        cityName = ( <ul className={main.Ul}>{fiveCity.map(city => {return (<li className={main.Li} key={city} onClick={()=>setDepart(city)} >{city} </li>)})}</ul>)
    }else{
        cityName = ( <ul className={main.Ul}>{fiveCity.map(city => {return (<li className={main.Li} key={city} onClick={()=>setArriver(city)} >{city} </li>)})}</ul>)
    }

    // affichage des suggestion ou des 5 villes populaires

    const showCity =  suggestionCity.length === 0 ?  <> {cityName} </>  :  <>{choise} </> 
    
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
