const express = require("express");
const app = express();
const patientRoutes = require("./router");

app.use(express.json());
app.use("/patients", patientRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("Run the server using: node server.js");
});
