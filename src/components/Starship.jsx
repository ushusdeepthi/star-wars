import React, { useState, useEffect} from 'react'

export default function Starship({starship}) {
    const [starships, setStarships] = useState(null)
    useEffect(()=>{
        fetch(starship)
        .then(resp => resp.json())
        .then(data =>setStarships(data))
    },[])
    return (
        <>
        {!starships && <p>Loading...</p>} 
        { starships && (
            <tr>
                <td>{starships.name}</td>
                <td>{starships.model}</td>
                <td>{starships.manufacturer}</td>
                <td>{starships.cost_in_credits}</td>
                <td>{starships.crew}</td>
                <td>{starships.passengers}</td>
                <td>{starships.starship_class}</td>
           </tr>
        )}
        </>
       
    )}