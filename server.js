const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());    // allow frontend requests

// Route: fetch code securely
app.get('/get-code/:id', (req, res) => {
    const id = req.params.id;
    const filePath = path.join(__dirname, 'codes', `${id}.txt`);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).json({ error: "File not found" });
        }
        res.json({ code: data });
    });
});

app.listen(3000, () => {
    console.log("Plotify backend running on http://localhost:3000");
});
