const router = require('express').Router();
const { Goal, User, Checkbook } = require('../models');
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
    // console.log(goals, 'THIS IS WHERE GOALS WILL APPEAR');
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

// rewrite as .then route below
// Use withAuth middleware to prevent access to route MAY NEED TO CHANGE /PROFILE PATH
router.get('/overview', withAuth, async (req, res) => {
  console.log('In overview route')
  try {
    // Find the logged in user based on the session ID
    let userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Goal }, { model: Checkbook }],
    }) 

    // let categories = await Checkbook.findAll({
    //   attributes: ['category', [sequelize.fn('sum', sequelize.col('amount')), 'total_amount']],
    //   where: { user_id: req.session.user_id },
    //   group: "category"
    // });
    // console.log(categories)
    const user = userData.get({ plain: true });
    // const cats = categories.map((cat) => cat.get({ plain: true }));
    // console.log(user)
    // console.log(cats)
    res.render('overview', {
      logged_in: true,
      // add ,categories: req.session.categories
      // each loop to get data that we want at some point
       ...user
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

router.get('/categories/:id', async (req, res)=> {
  try {
    const categories = await Checkbook.findAll({
      attributes: ['category', [sequelize.fn('sum', sequelize.col('amount')), 'total_amount']],
      where: { user_id: req.params.id },
      group: "category"
    });
    res.render('overview', {
      categories
    })
    // res.json(categories);
    // console.log(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
