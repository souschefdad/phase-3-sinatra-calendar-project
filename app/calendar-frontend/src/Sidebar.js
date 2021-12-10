import "./Sidebar.css"
import Form from "./Form"


function Sidebar({eventsList, date_ds, setEvents}){
    return(
        <div id= "side">
            <Form eventsList={eventsList} setEvents={setEvents} date_ds={date_ds}/>
        </div>
    )
}

export default Sidebar