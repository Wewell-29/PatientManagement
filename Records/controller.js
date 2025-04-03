const patients = {
    1: { patient_id: 1, diagnosis: "Flu", prescriptions: ["Paracetamol", "Rest"] },
    2: { patient_id: 2, diagnosis: "Allergy", prescriptions: ["Antihistamine"] },
};

exports.getPatientRecords = (req, res) => {
    const patientId = req.params.id;
    const record = patients[patientId];
    if (record) {
        res.json(record);
    } else {
        res.status(404).json({ message: "Patient not found" });
    }
};
