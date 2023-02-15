require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');

const cardRoutes = require('./routes/cardRoutes');

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(cors({
    origin: 'https://churn-velocity-site.onrender.com',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

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