import React, { useState, useEffect} from 'react'

export default function Species({singleSpecies}) {
    const updatedSingleSpecies = singleSpecies.replace(/^http:\/\//i, 'https://');
    const [species, setSpecies] = useState(null)
    useEffect(()=>{
        fetch(updatedSingleSpecies)
        .then(resp => resp.json())
        .then(data =>setSpecies(data))
    },[])
    return (
        <>
            {!species && <tr><th>Loading...</th></tr>} 
            { species && (
                <tr>
                    <td>{species.name}</td>
                    <td>{species.classification}</td>
                    <td>{species.designation}</td>
                    <td>{species.average_lifespan}</td>
                    <td>{species.average_height}</td>
                    <td>{species.language}</td>
                </tr>
            )}
        </>
    )
}