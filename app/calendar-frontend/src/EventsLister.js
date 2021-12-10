import "./EventLister.css"

import { useState, useEffect } from 'react'

function EventsLister({ date_ds }) {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/events_list")
            .then(resp => resp.json())
            // .then(console.log)
            .then(setEvents)
    }, [])


    function handleDelete(id) {
        fetch(`http://localhost:9292/event_list/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => setEvents(events.filter(e => e.id !== id)));
    }


    return (
        <>
        <div className="event_container">
            {events.map((date_event) => {
                let dateArray = date_ds.filter(d => d.id === date_event.date_d_id)
                return (
                    
                        <div className='event_cards'>
                            <p><b>Name:</b> {date_event.name}</p>

                            <p><b>Country:</b> {date_event.country}</p>

                            <p><b>Location:</b> {date_event.location}</p>

                            <p><b>Type:</b> {date_event.holiday_type}</p>

                            <p><b>Date:</b> {dateArray.map(e => e.date)}</p>

                            <button onClick={() => handleDelete(date_event.id)}><b>Delete</b></button>
                        </div>
                    
                )
            })}
        </div>
        </>

    )
}

export default EventsLister