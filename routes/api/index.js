const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');


// add prefix for thought and user routes
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;