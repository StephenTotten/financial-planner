const router = require('express').Router();
const userRoutes = require('./userRoutes');
const goalRoutes = require('./goalRoutes');

router.use('/users', userRoutes);
router.use('/goals', goalRoutes);

module.exports = router;
