const router = require('express').Router();

// thought imports from controller
const {
    getAllThoughts,
    getThoughtByID,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// api/thoughts (all thoughts)
router.route('/')
    .get(getAllThoughts);

// api/thoughts/:id (one thought by id)
router.route('./:id')
    .get(getThoughtsById)
    .put(updateThought)
    .delete(deleteThought);

// api/thoughts/:userID (one thought by user id)
router.route('/:userId')
    .post(createThought);

// api/thoughts/:thoughtID/reactions (one thought by thought ID)
router.route('/:thoughtId/reactions')
    .post(addReaction);

// api/thoughts/:thoughtID/reactionID (by thought and reaction ID)
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;