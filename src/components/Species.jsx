import React, { useState, useEffect} from 'react'
import { TableStyled } from '../styles/TableStyled';

export default function Species({singleSpecies,index}) {
    const updatedSingleSpecies = singleSpecies.replace('http','https');
    const [species, setSpecies] = useState(null)
    useEffect(()=>{
        fetch(updatedSingleSpecies)
        .then(resp => resp.json())
        .then(data =>setSpecies(data))
    },[])
    return (
        <TableStyled>
        {!species && <thead><tr><th>Loading...</th></tr></thead>} 
             <>
                { species && (
                    <tbody>
                        <tr>
                        <th>Starship Number</th>
                        <td>{index}</td>
                            
                        </tr>
                            <tr>
                            <th>Name</th>
                            <td>{species.name}</td>
                        </tr>
                        <tr>
                            <th>Classification</th>
                            <td>{species.classification}</td>
                        </tr>
                        <tr>
                            <th>Designation</th>
                            <td>{species.designation}</td>
                        </tr>
                        <tr>
                            <th>Average Lifespan</th>
                            <td>{species.average_lifespan}</td>
                        </tr>
                        <tr>
                            <th>Average height</th>
                                <td>{species.average_height}</td>
                        </tr>
                        <tr>
                            <th>Language</th>
                            <td>{species.language}</td>
                        </tr>
                    </tbody>
                )}
            </>
        </TableStyled>
    )
}