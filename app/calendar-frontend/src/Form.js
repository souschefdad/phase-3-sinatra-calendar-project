import React, { useState } from 'react';
import './Form.css'


function Form (){

    const[dateForm, setDateForm] = useState('')
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");

    function handleSubmit(e){
        e.preventDefault()
        console.log(name, country, location, type, dateForm)
    }


    return(
        <div className="form">
            <h2>Add an Event:</h2>
            <form onSubmit={handleSubmit}>
                <span>Name:</span>
                <input onChange={(e) => setName(e.target.value)} placeholder="name"/>
                <span>Country:</span>
                <input onChange={(e) => setCountry(e.target.value)} placeholder="country"/>
                <span>Location:</span>
                <input onChange={(e) => setLocation(e.target.value)} placeholder="location"/>
                <span>Type:</span>
                <input onChange={(e) => setType(e.target.value)} placeholder="type"/>
                <span>Date:</span>
                <input onChange={(e) => setDateForm(e.target.value)} placeholder="mm/dd/year"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form

//  name country location date type