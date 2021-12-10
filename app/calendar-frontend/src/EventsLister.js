import {useState, useEffect} from 'react'

function EventsLister({date_ds}) {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/events_list")
        .then(resp => resp.json())
        // .then(console.log)
        .then(setEvents)
    },[])

    // function findById() {
    //     date_ds.find(d => d.id === (date_event.date_d_id))
    // }
    // debugger
    
return (
    
    <>
    {events.map((date_event) =>{
        let dateArray = date_ds.filter(d => d.id === date_event.date_d_id)
            return (
                <>
                <h1>Name: {date_event.name}</h1>
                <h2>Country: {date_event.country}</h2>
                <h2>Location: {date_event.location}</h2>
                <h2>Type: {date_event.holiday_type}</h2>
                <h2>Date: {dateArray.map(e => e.date)}</h2>
                </>
            )
        })}
    </>
    
)
}

export default EventsLister