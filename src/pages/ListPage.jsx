import React, { useState,useEffect,useRef }   from 'react'
import { BiSearchAlt } from "react-icons/bi";
import CharacterName from '../components/CharacterName';

export default function ListPage() {
    const [characterList, setCharacterList] =useState(null);
    const [searchTerm, setSearchTerm]=useState('')
    const inputRef = useRef()
    useEffect(()=>{
        fetch('https://swapi.dev/api/people/')
        .then(resp=>resp.json())
        .then(data=>setCharacterList(data.results)) 
    },[])
    const handleOnClick = ()=>{
        const input = inputRef.current
        if(input.value !== "") {
            setSearchTerm(input.value)
    }
    input.value = ""
        
    }
    return (
        <div className="text-white bg">
            <div className="container text-center">
                <h1 className="p-5">List of Star-War characters</h1>
                <div className="input-group justify-content-center pb-5">
                    <div className="form-outline">
                        <input ref={inputRef} type="search" id="form1" className="form-control" Placeholder="Search"  />
                    </div>
                    <button type="button" class="btn btn-primary"  onClick={handleOnClick}  >
                        <BiSearchAlt />
                    </button>
                </div>
                {!characterList && <p>Loading...</p>}
                <div className="row justify-content-center">
                    {characterList && (characterList.filter((character)=>{
                        if(searchTerm === "") return character;
                        
                        else if(character.name.toLowerCase().includes(searchTerm.toLowerCase())) return character;
                        
                    }).map((character,index)=>{
                        return(
                            <CharacterName key={index} index={index + 1}
                                            character={character} />
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}
