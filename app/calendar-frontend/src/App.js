
import {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import Sidebar from './Sidebar';
import EventsLister from './EventsLister';

function App() {
  const [events, setEvents] = useState([])
  const [date_ds, setDate_ds] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/events_list")
      .then(resp => resp.json())
      // .then(console.log)
      .then(setEvents)
  },[])

  useEffect(() => {
      fetch("http://localhost:9292/date_ds")
      .then(resp => resp.json())
      .then(setDate_ds)
  },[])

  return (
    <div className="App">
      Hello world
      <Sidebar />
      {/* <h1>Calendar</h1> */}
      <Form eventsList={events} setEvents={setEvents} date_ds={date_ds}/>
      <EventsLister date_ds={date_ds}/>
    </div>
  );
}

export default App;