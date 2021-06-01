import React, { useState, useEffect} from 'react'
import { TableStyled } from '../styles/TableStyled'

export default function HomeWorld({homeworldapi}) {
    const updatedPlanet = homeworldapi.replace(/^http:\/\//i, 'https://');
    const [homeWorld, setHomeWorld]= useState(null)
    useEffect(()=>{
        fetch(updatedPlanet)
        .then(resp => resp.json())
        .then(data => setHomeWorld(data))
    },[])
    return (
        <>
            <h5 className="text-center">Home World</h5>
            <TableStyled>
                {!homeWorld && <thead><tr><th>Loading...</th></tr></thead>}
                    <>
                        { homeWorld && (
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{homeWorld.name}</td>    
                                </tr>
                                <tr>
                                    <th>Rotation Period</th>
                                    <td>{homeWorld.rotation_period}</td>
                                </tr>
                                <tr>
                                    <th>Orbital Period</th>
                                    <td>{homeWorld.orbital_period}</td>
                                </tr>   
                                <tr>
                                    <th>Diameter</th>
                                    <td>{homeWorld.diameter}</td>
                                </tr>
                                <tr>
                                    <th>Climate</th>
                                    <td>{homeWorld.climate}</td>
                                </tr>
                                <tr>
                                    <th>Gravity</th>
                                    <td>{homeWorld.gravity}</td>
                                </tr>
                                <tr>
                                    <th>terrain</th>
                                    <td>{homeWorld.terrain}</td>
                                </tr>
                                <tr>
                                    <th>Surface Water</th>
                                    <td>{homeWorld.surface_water}</td>
                                </tr>
                                <tr>
                                    <th>Population</th>
                                    <td>{homeWorld.population}</td>
                                </tr>
                            </tbody>
                        )}
                </>
            </TableStyled>        
        </>
    )
}
