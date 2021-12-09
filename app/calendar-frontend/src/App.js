
import {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import Sidebar from './Sidebar';

function App() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/events_list")
    .then(resp => resp.json())
    .then(setEvents)
  },[])

  return (
    
    <div className="App">

      {events.map((date_event) =>{
        return (
          <>
          <h1>Name: {date_event.name}</h1>
          <h2>Country: {date_event.country}</h2>
          <h2>Location: {date_event.location}</h2>
          <h2>Type: {date_event.holiday_type}</h2>
          </>
        )
      })}

      <Sidebar/>
      <h1>Calendar</h1>
      <Form/>
    </div>
  );
}

export default App;
