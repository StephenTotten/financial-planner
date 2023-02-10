const User = require('./User');
const Goal = require('./Goal');

User.hasMany(Goal, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Goal.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Goal };