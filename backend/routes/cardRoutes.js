const express = require('express');
const router = express.Router();

const { getAllCards, getOneCard, postCard, patchCard, deleteCard, deleteAll } = require('../controllers/cardController');

// GET all cards
router.get('/', getAllCards);

// GET one card
router.get('/:id', getOneCard);

// POST a card
router.post('/', postCard);

// PATCH a card
router.patch('/:id', patchCard);

// DELETE All (DEV)
router.delete('/all', deleteAll);

// DELETE a card
router.delete('/:id', deleteCard);

module.exports = router;