require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const cardRoutes = require('./routes/cardRoutes');

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/cards/', cardRoutes);

// mongodb
mongoose.connect(process.env.MONGOOSE_MRI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB. Listening on port", process.env.PORT);
        });
    })
    .catch(error => {
        console.log(error);
    });