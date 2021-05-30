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
                    <TableStyled >
                         <tbody>
                             <tr>
                                 <th>Name</th>
                                 <th>Episode</th>
                                 <th>Opening Crawl</th>
                                 <th>Director</th>
                                 <th>Producer</th>
                                 <th>Release Date</th>
                             </tr>
                  
                        {characterDetail.films.map((film,index) =>{
                          return <Film key = {index} film = {film} />
                        })}
                         </tbody>
                           
                         </TableStyled>
               
                  
                    {characterDetail.vehicles.length!==0 &&(
                        <>
                        <h5 className="text-center">Vehicles</h5>
                        <TableStyled >
                         <tbody>
                             <tr>
                                 <th>Name</th>
                                 <th>Model</th>
                                 <th>Manufacturer</th>
                                 <th>cost</th>
                                 <th>crew</th>
                                 <th>passengers</th>
                                 <th>class</th>
                             </tr>
                              {characterDetail.vehicles.map((vehicle,index) =>{
                            return <Vehicle key= { index} vehicle={ vehicle } />
                            })}
                         </tbody>
                           
                         </TableStyled>
                         </>
                    )} 
                    {characterDetail.starships.length!==0 &&(
                        <>
                        <h5 className="text-center">Starships</h5>
                        <TableStyled >
                         <tbody>
                             <tr>
                                 <th>Name</th>
                                 <th>Model</th>
                                 <th>Manufacturer</th>
                                 <th>cost</th>
                                 <th>crew</th>
                                 <th>passengers</th>
                                 <th>class</th>
                             </tr>
                              {characterDetail.starships.map((starship,index) =>{
                            return <Starship key= { index} starship={ starship } />
                            })}
                         </tbody>
                           
                         </TableStyled>
                         </>
                    )}
                {characterDetail.species.length!==0 &&(
                        <>
                        <h5 className="text-center">Species</h5>
                        <TableStyled >
                         <tbody>
                             <tr>
                                 <th>Name</th>
                                 <th>Classification</th>
                                 <th>Designation</th>
                                 <th>Average Lifespan</th>
                                 <th>Average Height</th>
                                 <th>Language</th>
                             </tr>
                              {characterDetail.species.map((species,index) =>{
                            return <Species key= { index} singleSpecies={ species } />
                            })}
                         </tbody>
                           
                         </TableStyled>
                         </>
                )}  
                </>
                
                )}
            </div>
        </div>
    )
}
