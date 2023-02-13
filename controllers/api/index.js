const router = require('express').Router();
const userRoutes = require('./userRoutes');
const goalRoutes = require('./goalRoutes');
const checkbookRoutes = require('./checkbookRoutes');

router.use('/users', userRoutes);
router.use('/goals', goalRoutes);
router.use('/checkbook', checkbookRoutes);

module.exports = router;
