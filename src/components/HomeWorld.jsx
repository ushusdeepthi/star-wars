import React, { useState, useEffect} from 'react'
import { TableStyled } from '../styles/TableStyled'

export default function HomeWorld({homeworldapi}) {
    const [homeWorld, setHomeWorld]= useState(null)
    useEffect(()=>{
        fetch(homeworldapi)
        .then(resp => resp.json())
        .then(data => setHomeWorld(data))
    },[])
    return (
        <>
            <h5 className="text-center">Home World</h5>
            <TableStyled>
                {!homeWorld && <p>Loading...</p>}
                <>
                    { homeWorld && (
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Rotation Period</th>
                                <th>Orbital Period</th>
                                <th>Diameter</th>
                                <th>Climate</th>
                                <th>Gravity</th>
                                <th>terrain</th>
                                <th>Surface Water</th>
                                <th>Population</th>
                                
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                                <td>{homeWorld.name}</td>
                                <td>{homeWorld.rotation_period}</td>
                                <td>{homeWorld.orbital_period}</td>
                                <td>{homeWorld.diameter}</td>
                                <td>{homeWorld.climate}</td>
                                <td>{homeWorld.gravity}</td>
                                <td>{homeWorld.terrain}</td>
                                <td>{homeWorld.surface_water}</td>
                                <td>{homeWorld.population}</td>
                            </tr>
                        </tbody>
                    )}
                </>
            </TableStyled>
        </>
    )
}
