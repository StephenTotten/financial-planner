const sequelize = require('../config/connection');
const { User, Goal, Checkbook } = require('../models');

const userData = require('./userData.json');
const goalsData = require('./goalsData.json');
const checkbookData = require('./checkbookData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const goal of goalsData) {
    await Goal.create({
      ...goal,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const checkbook of checkbookData) {
    await Checkbook.create({
      ...checkbook,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();
