import React, { useState, useEffect} from 'react'
import { TableStyled } from '../styles/TableStyled';

export default function Starship({starship,index}) {
    const [starships, setStarships] = useState(null)
    useEffect(()=>{
        fetch(starship)
        .then(resp => resp.json())
        .then(data =>setStarships(data))
    },[])
    return (
        <TableStyled>
        {!starships && <thead><tr><th>Loading...</th></tr></thead>} 
            <>
                { starships && (
                        <tbody>
                            <tr>
                                <th>Starship Number</th>
                                <td>{index}</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>{starships.name}</td>
                            </tr>
                            <tr>
                                <th>Model</th>
                                <td>{starships.model}</td>
                            </tr>
                            <tr>
                                <th>Cost</th>
                                <td>{starships.cost_in_credits}</td>
                            </tr>
                            <tr>
                                <th>Crew</th>
                                <td>{starships.crew}</td>
                            </tr>
                            <tr>
                                <th>Passengers</th>
                                <td>{starships.passengers}</td>
                            </tr>
                            <tr>
                                <th>Class</th>
                                <td>{starships.starship_class}</td>
                            </tr>
                        </tbody>
                )}
            </>

        </TableStyled>    
    )
}