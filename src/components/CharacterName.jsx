import React, { useState} from 'react'
import { Link } from 'react-router-dom';

export default function CharacterName({character}) {
    const [showText, setShowText] = useState(false)
    const handleOnClick =()=>{
        showText ? setShowText(false): setShowText(true)}
    return (
        <div className="col-md-3 m-3 p-4 border border-3">
            <h3 onClick= {handleOnClick}>{character.name}</h3>
            {showText && (
                <>
                    <p>Height: { character.height }</p>
                    <p>Mass: { character.mass }</p>
                    <p>Birth year: { character.birth_year }</p>
                    <p>Gender: { character.gender }</p> 
                    <Link>View more details</Link> 
                </> 
                    )}         
        </div>
    )
}
