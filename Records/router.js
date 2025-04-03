const express = require("express");
const router = express.Router();
const patientController = require("./controller");

router.get("/:id/records", patientController.getPatientRecords);

module.exports = router;