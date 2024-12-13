import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const title = prompt('Enter a title for your event:');
    if (title) {
      setEvents([
        ...events,
        {
          title,
          start: info.dateStr,
          allDay: true,
        },
      ]);
    }
  };

  const handleEventClick = (info) => {
    const newTitle = prompt('Edit event title:', info.event.title);
    if (newTitle) {
      info.event.setProp('title', newTitle);
    }
  };

  return (
    <div>
      <Header/>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        editable={true}
        selectable={true}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
      <Footer/>
    </div>
  );
};

export default Calendar;
