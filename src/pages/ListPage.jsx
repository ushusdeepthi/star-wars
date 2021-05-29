import React, { useState,useEffect }   from 'react'
import CharacterName from '../components/CharacterName';

export default function ListPage() {
    const [characterList,setCharacterList] =useState(null);
    useEffect(()=>{
        fetch('https://swapi.dev/api/people/')
        .then(resp=>resp.json())
        .then(data=>setCharacterList(data.results))
    },[])
    return (
        <div className="text-white bg">
            <div className="container text-center">
                <h1 className="p-5">List of Star-War characters</h1>
                <div className="input-group justify-content-center pb-5">
                    <div className="form-outline">
                        <input type="search" id="form1" className="form-control" Placeholder="Search" />
                    </div>
                    <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                {!characterList && <p>Loading...</p>}
                <div className="row justify-content-center">
                    {characterList && (characterList.map((character,index)=>{
                        return(
                            <CharacterName key={index}
                                            character={character} />
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}
