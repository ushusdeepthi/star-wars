import React, { useState, useEffect} from 'react'
import Film from '../components/Film';
import HomeWorld from '../components/HomeWorld';
import Species from '../components/Species';
import Starship from '../components/Starship';
import Vehicle from '../components/Vehicle';
import { TableStyled } from '../styles/TableStyled';

export default function DetailPage(props) {
    const [ characterDetail, setCharacterDetail] =useState(null);
    const id= props.match.params.id
    useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${id}/`)
        .then(resp=>resp.json())
        .then(data=> setCharacterDetail(data))
    },[])

    return (
        <div className="text-white bg">          
            {!characterDetail && <p>Loading...</p>}
            <div>
                { characterDetail && (
                    <>
                        <div className="text-center p-5">
                            <h2 className="pb-5">{characterDetail.name}</h2>
                            <h5 className="p-2">Height: { characterDetail.height }</h5>
                            <h5 className="p-2">Mass: { characterDetail.mass }</h5>
                            <h5 className="p-2">Hair Color: { characterDetail.hair_color }</h5 >
                            <h5  className="p-2">Eye Color: { characterDetail.eye_color}</h5 >
                            <h5  className="p-2">Birth year: { characterDetail.birth_year }</h5 >
                            <h5  className="p-2">Gender: { characterDetail.gender }</h5 >
                        </div>
                        <HomeWorld homeworldapi={characterDetail.homeworld} />
                        <h5 className="text-center"> Films </h5>
                        {characterDetail.films.map((film,index) =>{
                            return <Film key = {index} index={index + 1} film = {film} />
                        })}
                        {characterDetail.vehicles.length!==0 &&(
                            <>
                                <h5 className="text-center">Vehicles</h5>
                                {characterDetail.vehicles.map((vehicle,index) =>{
                                    return <Vehicle key= { index} index={index + 1} vehicle={ vehicle } />
                                })}
                            </>
                        )} 
                        {characterDetail.starships.length!==0 &&(
                            <>
                                <h5 className="text-center">Starships</h5>
                                {characterDetail.starships.map((starship,index) =>{
                                    return <Starship key= { index} index={index + 1} starship={ starship } />
                                })}
                            </>
                        )}
                        {characterDetail.species.length!==0 &&(
                            <>
                                <h5 className="text-center">Species</h5>
                                {characterDetail.species.map((species,index) =>{
                                    return <Species key= { index} index={index + 1} singleSpecies={ species } />
                                })}
                            </>
                        )}  
                    </>
                )}
            </div>
        </div>
    )
}
