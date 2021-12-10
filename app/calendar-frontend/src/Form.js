import React, { useState } from 'react';
import './Form.css'


function Form ({eventsList, setEvents, date_ds}){

    const [dateForm, setDateForm] = useState('')
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");

    function handleSubmit(e) {
        let dateArray = date_ds.filter(d => d.date === dateForm)
        let dateId = (dateArray.map(d => d.id))[0]
        e.preventDefault();
        debugger
        fetch("http://localhost:9292/event_list", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                name: name,
                country: country,
                location: location,
                holiday_type: type,
                date_d_id: dateId,
            }),
            })
            .then((r) => r.json())
            .then((newEvent) => setEvents([...eventsList, newEvent]));
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