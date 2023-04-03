const express = require('express');
const app = express();

const port = 3000;

const db = [
    {
        name: "nadira",
        origin: "madura",
        role: "backend",
    }
];

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        data: db,
    });
});

app.post("/", (req, res) => {
    const { name, origin, role } = req.body;
    db.push({ name, origin, role });
    res.status(201).json({
        message: "Data saved successfully",
   });
});

app.listen(port, () =>{
    console.log('Server is running on port '+port);
});