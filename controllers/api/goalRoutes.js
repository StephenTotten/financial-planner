const router = require('express').Router();
const { Goal } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new goal
router.post('/', withAuth, async (req, res) => {
  try {
    const newGoal = await Goal.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a goal by id
router.put('/:id', withAuth, async (req, res) => {
  try {
    const goalData = await Goal.update({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!goalData) {
      res.status(404).json({ message: 'No goal found with this id!' });
      return;
    }

    res.status(200).json(goalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a goal by id
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const goalData = await Goal.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!goalData) {
        res.status(404).json({ message: 'No goal found with this id!' });
        return;
      }
  
      res.status(200).json(goalData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// Get all goals
router.get('/', withAuth, async (req, res) => {
  try {
    const newGoal = await Goal.findAll({
      where: {
        user_id: req.session.user_id,
      }

    });

    res.status(200).json(newGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
