import React, { useState, useEffect} from 'react'
import { TableStyled } from '../styles/TableStyled';

export default function Vehicle({vehicle,index}) {
    const [vehicles, setVehicles] = useState(null)
    useEffect(()=>{
        fetch(vehicle)
        .then(resp => resp.json())
        .then(data =>setVehicles(data))
    },[])
    return (
        <TableStyled> 
            {!vehicles && <thead><tr><th>Loading...</th></tr></thead>}
            <>
                { vehicles && (
                        <tbody>
                            <tr>
                            <th>Vehicle Number</th>
                            <td>{index}</td>        
                        </tr>
                            <tr>
                            <th>Name</th>
                            <td>{vehicles.name}</td>
                        </tr>
                        <tr>
                            <th>Model</th>
                            <td>{vehicles.model}</td>
                        </tr>
                        <tr>
                            <th>Orbital Period</th>
                            <td>{vehicles.manufacturer}</td>
                        </tr>
                        <tr>
                            <th>Cost</th>
                            <td>{vehicles.cost_in_credits}</td>
                        </tr>
                        <tr>
                            <th>Crew</th>
                            <td>{vehicles.crew}</td>
                        </tr>
                        <tr>
                            <th>Passengers</th>
                            <td>{vehicles.passengers}</td>
                        </tr>
                        <tr>
                            <th>Class</th>
                            <td>{vehicles.vehicle_class}</td>
                        </tr>
                    </tbody>
                )}
            </>
        </TableStyled>
    )
}