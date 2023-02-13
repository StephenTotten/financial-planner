const router = require('express').Router();
const { Checkbook } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new transaction
router.post('/', withAuth, async (req, res) => {
  try {
    const newCheckbook = await Checkbook.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCheckbook);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a transaction by id
router.put('/:id', withAuth, async (req, res) => {
  try {
    const checkbookData = await Checkbook.update({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!checkbookData) {
      res.status(404).json({ message: 'No transaction found with this id!' });
      return;
    }

    res.status(200).json(checkbookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a transaction by id
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const checkbookData = await Checkbook.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!checkbookData) {
        res.status(404).json({ message: 'No transaction found with this id!' });
        return;
      }
  
      res.status(200).json(checkbookData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;
