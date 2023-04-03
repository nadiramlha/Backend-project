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

// GET all data
app.get("/data", (req, res) => {
    res.status(200).json(db);
});

// GET data by id
app.get("/data/:id", (req, res) => {
    const { id } = req.params;
    const data = db.find(d => d.name === id);
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({
            message: "Data not found",
        });
    }
});

// POST new data
app.post("/data", (req, res) => {
    const { name, origin, role } = req.body;
    const newData = { name, origin, role };
    db.push(newData);
    res.status(201).json({
        message: "Data created successfully",
        data: newData,
    });
});

// PUT update data by id
app.put("/data/:id", (req, res) => {
    const { id } = req.params;
    const { name, origin, role } = req.body;
    const index = db.findIndex(d => d.name === id);
    if (index !== -1) {
        db[index] = { name, origin, role };
        res.status(200).json({
            message: "Data updated successfully",
            data: db[index],
        });
    } else {
        res.status(404).json({
            message: "Data not found",
        });
    }
});

// DELETE data by id
app.delete("/data/:id", (req, res) => {
    const { id } = req.params;
    const index = db.findIndex(d => d.name === id);
    if (index !== -1) {
        db.splice(index, 1);
        res.status(200).json({
            message: "Data deleted successfully",
        });
    } else {
        res.status(404).json({
            message: "Data not found",
        });
    }
});

app.listen(port, () =>{
    console.log('Server is running on port '+port);
});
