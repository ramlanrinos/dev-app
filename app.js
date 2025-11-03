const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to the app from DevOps!");
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

module.exports = {app, server};