const User = require('./User');
const Goal = require('./Goal');
const Checkbook = require('./Checkbook');

User.hasMany(Goal, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Goal.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Checkbook, {
  foreignKey: 'user_id'
});

Checkbook.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Goal, Checkbook };