import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Eventid from "./Eventid";

const Event = () => {
    // const {name,image,price,description} = event || {}

    const [event, setEvent] = useState()
    const { id } = useParams()

    const { events } = useLoaderData()

    useEffect(() => {
        const findEvent = events?.find(event => event.id === id)
        setEvent(findEvent)
    }, [id, events])
    console.log(event)
    return (
        <div>
          <Eventid event={event}></Eventid>


        </div>
    );
};

export default Event;