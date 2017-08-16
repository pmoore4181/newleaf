module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define("Goal", {

    goal_ID: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    step_to_get_there: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    monday: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    tuesday: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    wednesday: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    thursday: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    friday: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    saturday: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    sunday: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Goal.associate = function(models) {
    // We're saying that a Goal should belong to an user
    // A Goal can't be created without an user due to the foreign key constraint
    Goal.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Goal;
};

