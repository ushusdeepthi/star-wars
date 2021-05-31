import React, { useState, useEffect} from 'react'

export default function Film({film}) {
    const [films, setFilms] = useState(null)
    useEffect(()=>{
        fetch(film)
        .then(resp => resp.json())
        .then(data =>setFilms(data))
    },[])
    return (
    <>
            {!films && <tr><th>Loading...</th></tr>}
                { films && (
                    <tr>
                    <td>{films.title}</td>
                    <td>{films.episode_id}</td>
                    <td>{films.opening_crawl}</td>
                    <td>{films.director}</td>
                    <td>{films.producer}</td>
                    <td>{films.release_date}</td>
                    </tr>
                )}
            </>
)}
