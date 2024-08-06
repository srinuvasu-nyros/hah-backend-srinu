const express = require('express');
const organization_controller = require('../controllers/api/organization_controller.js');
// const { auth_check } = require('../middleware/auth_middleware.js');
const router = express.Router();
const Organization = require('../models/organization.js')
const Church = require('../models/church.js')
const churches_controller = require('../controllers/api/churches_controller.js')
const Event = require("../models/event.js")
const events_controller = require("../controllers/events_controller.js")
const LiveChurch = require("../models/live_church.js")
const live_churches_controller = require("../controllers/live_churches_controller.js")



// organization routes

router.post('/organizations', organization_controller.createOrganization); // create organization
router.get('/organizations/:id', organization_controller.getOrganization);  // get organizations by id
router.get('/organizations', organization_controller.getOrganizations);  // get all  organizations
router.put('/organizations/:id', organization_controller.updateOrganization); // update organization
router.delete('/organizations/:id', organization_controller.deleteOrganization); // delete organization


// Routes for Churches
router.post('/churches', churches_controller.createChurch);  // create church
router.get('/churches', churches_controller.getAllChurches); // get all churches
router.get('/churches/:id', churches_controller.getChurchById);  // get churches by Id
router.put('/churches/:id', churches_controller.updateChurch); // update church
router.delete('/churches/:id', churches_controller.deleteChurch); // delete churches


//Router for Events
router.post('/events', events_controller.createEvent);  // create events
router.get('/events', events_controller.getEvents); // get all events
router.get('/events/:id', events_controller.getEventById);  // get events by Id
router.put('/events/:id', events_controller.updateEvent);  // update events
router.delete('/events/:id', events_controller.deleteEvent);  // delete events




module.exports = router;
