import React, { useState, useEffect} from 'react'
import { TableStyled } from '../styles/TableStyled';

export default function Film({film,index}) {
    const [films, setFilms] = useState(null)
    useEffect(()=>{
        fetch(film)
        .then(resp => resp.json())
        .then(data =>setFilms(data))
    },[])
    return (
        <TableStyled>      
            {!films && <thead><tr><th>Loading...</th></tr></thead>} 
            <>
                { films && (
                    <tbody>
                        <tr>
                            <th>Film Number</th>
                            <td>{index}</td>                            
                        </tr>
                            <tr>
                            <th>Title</th>
                            <td>{films.title}</td>                            
                        </tr>
                        <tr>
                            <th>Episodes</th>
                            <td>{films.episode_id}</td>                
                        </tr>
                        <tr>
                            <th>Opening Crawl</th>
                            <td>{films.opening_crawl}</td>
                        </tr>                    
                        <tr>
                            <th>Direcrtor</th>
                            <td>{films.director}</td>
                        </tr>
                        <tr>
                            <th>Crew</th>
                            <td>{films.crew}</td>
                        </tr>
                        <tr>
                            <th>Producer</th>
                            <td>{films.producer}</td>
                        </tr>
                        <tr>
                            <th>Release Date</th>
                            <td>{films.release_date}</td>
                        </tr>
                    </tbody>
                )}
            </>
        </TableStyled>
    )
}