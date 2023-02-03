const mongoose = require('mongoose');
const Card = require('../models/cardModel');

// GET all cards
const getAllCards = async (req, res) => {
    const cards = await Card.find({}).sort({ "opened.year": -1, "opened.month": -1 });
    res.status(200).json(cards);
}

// GET one card
const getOneCard = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID Format" });
    }

    try {
        const card = await Card.findById(id);

        if(!card) {
            return res.status(404).json({ error: "Card ID Not Found"});
        }

        res.status(200).json(card);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

// POST a card
const postCard = async (req, res) => {
    const { name, opened } = req.body;

    try {
        const card = await Card.create({ name, opened });
        res.status(200).json({ card });
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

// PATCH a card
const patchCard = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID Format" });
    }

    try {
        const card = await Card.findByIdAndUpdate({ _id: id }, { ...req.body });

        if(!card) {
            return res.status(404).json({ error: "Card ID Not Found"});
        }

        res.status(200).json(card);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

// DELETE a card
const deleteCard = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID Format" });
    }

    try {
        const card = await Card.findByIdAndDelete({ _id: id });

        if (!card) {
            return res.status(404).json({ error: "Card ID Not Found" });
        }

        res.status(200).json(card);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// export functions
module.exports = {
    getAllCards,
    getOneCard,
    postCard,
    patchCard,
    deleteCard
}