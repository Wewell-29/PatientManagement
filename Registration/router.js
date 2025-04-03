const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// POST route for patient registration
router.post('/register', patientController.registerPatient);

module.exports = router;
