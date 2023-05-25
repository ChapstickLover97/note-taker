const express = require('express');
const htmlRoutes = require('./routes/htmlRoute');
const apiRoutes = require("./routes/apiRoute");

const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () =>
    console.log(`Live at http://localhost:${PORT}`));