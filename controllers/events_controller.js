const Event = require("../models/event")
const Church = require("../models/church");
const Organization = require("../models/organization");

const createEvent = async (req, res) => {
  try {
      const { 
          title, description, start_date, end_date, start_time, end_time, church, organization, attachment, event_type, is_paid_event, is_featured_event, disabled, address, streaming_link, rsvp, long_description // Make sure to include this field 
          } = req.body;
      
      // Validate required fields
      if (!title || !description || !start_date || !end_date || !start_time || !end_time) {
          return res.status(400).json({ message: 'Missing required fields: title, description, start_date, end_date, start_time, end_time are required' });
      }

      // Validate and parse dates
      const parsedStartDate = new Date(start_date);
      const parsedEndDate = new Date(end_date);
      if (isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
          return res.status(400).json({ message: 'Invalid date format for start_date or end_date' });
      }

      // Validate and parse times
      const isValidTime = (time) => {
          const num = parseInt(time, 10);
          return !isNaN(num) && num >= 0 && num <= 2359 && 
              (num % 100 < 60); // Minutes must be < 60
      };

      if (!isValidTime(start_time) || !isValidTime(end_time)) {
          return res.status(400).json({ message: 'start_time and end_time must be valid numbers between 0000 and 2359 with valid minute values' });
      }

      // Create and save the new event
      const event = new Event({
          title, description, long_description: long_description || '', church, organization, attachment,start_date: parsedStartDate, end_date: parsedEndDate, start_time: parseInt(start_time, 10),
          end_time: parseInt(end_time, 10), event_type, is_paid_event: is_paid_event || false,is_featured_event: is_featured_event || false, disabled: disabled || false, address,streaming_link, rsvp
      });
      await event.save();

      // Populate related documents
      const populatedEvent = await Event.findById(event._id)
          .populate('church')
          .populate('organization');// Ensure user is populated if it is a reference

      res.status(201).json(populatedEvent);

  } catch (error) {
      console.error('Error creating event:', error);
      res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};


// Get all events
const getEvents = async (req, res) => {
    try {
        const events = await Event.find()
            .populate('church')
            .populate('organization');
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  

  // Get a single event by ID
const getEventById = async  (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
            .populate('church')
            .populate('organization');
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };


// Update an event by ID
const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
  };


// Delete an event by ID
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };


module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent
};