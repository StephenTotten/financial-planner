const router = require('express').Router();
const { Goal, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all goals and JOIN with user data
    const goalData = await Goal.findAll({
      include: [
        {
          model: User,
          attributes: ['email'],
        },
      ],
    });

    // Serialize data so the template can read it
    const goals = goalData.map((goal) => goal.get({ plain: true }));
    console.log(goals, 'THIS IS WHERE GOALS WILL APPEAR');
    // Pass serialized data and session flag into template
    res.render('login', { 
      goals, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/goal/:id', async (req, res) => {
  try {
    const goalData = await Goal.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['email'],
        },
      ],
    });

    const goal = goalData.get({ plain: true });

    res.render('goal', {
      ...goal,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route MAY NEED TO CHANGE /PROFILE PATH
router.get('/overview', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Goal }],
    });

    const user = userData.get({ plain: true });

    res.render('overview', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/overview');
    return;
  } else {
  res.render('login');
}});

module.exports = router;
