import React, { useState, useEffect} from 'react'

export default function Vehicle({vehicle}) {
    const [vehicles, setVehicles] = useState(null)
    useEffect(()=>{
        fetch(vehicle)
        .then(resp => resp.json())
        .then(data =>setVehicles(data))
    },[])
    return (
        <>
        {!vehicles && <p>Loading...</p>} 
        { vehicles && (
            <tr>
                <td>{vehicles.name}</td>
                <td>{vehicles.model}</td>
                <td>{vehicles.manufacturer}</td>
                <td>{vehicles.cost_in_credits}</td>
                <td>{vehicles.crew}</td>
                <td>{vehicles.passengers}</td>
                <td>{vehicles.vehicle_class}</td>
           </tr>
        )}
        </>
       
    )}