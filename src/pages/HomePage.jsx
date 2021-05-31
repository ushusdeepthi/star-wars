import React from 'react'
import { Link } from 'react-router-dom';


export default function HomePage() {
    return (       
        <div className="logo bg text-white p-5">
           <h1 className="p-5">Welcome to the star wars page!</h1>
           <Link to="/list" className="p-5">Star Wars characters</Link>
        </div>
    )
}
