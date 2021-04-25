const router = require('express').Router();

// thought imports
const {

} = require('../../controllers/thought-controller');

// Set up GET one, PUT, and DELETE at api/thoughts/:id
router
    .route('./:id')
    .get(getThoughtByID)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;