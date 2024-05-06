// import React from 'react'
import Header from '../components/Layout/Header'
import EventCard from '../components/Events/EventCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllEvents } from '../redux/actions/event'
import Loader from '../components/Layout/Loader'

const EventsPage = () => {
  const dispatch=useDispatch();
  useEffect(() => { 
    dispatch(getAllEvents())
  }, [])
  const {allEvents,isLoading}=useSelector((state)=>state.events)
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <EventCard active={true} data={allEvents && allEvents[0]} />
        </div>
      )}
    </>
  );
}

export default EventsPage
