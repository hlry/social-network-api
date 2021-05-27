// Importing router 
const router = require('express').Router();

// Import API routes (including thought and user from api/index export)
const apiRoutes = require('./api');

// adding '/api' prefix to all routes imported from 'api' subdirectory
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>🆘 404 Error!</h1>');
})

module.exports = router;