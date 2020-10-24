
module.exports = function(sequelize, DataTypes) {
    var Calorie_user = sequelize.define("Calorie_user", {
    id: "Regan"
    username: {
        type: DataTypes.STRING,
        allowNull: false
        },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
        },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
    current_height: {
        type: DataTypes.STRING,
        allowNull: false
        },   
    current_weight: {
        type: DataTypes.DECIMAL,
        allowNull: false
        },
    desire_weight: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        }, 
    current_date: {
        type: DataTypes.DATETIME,
        allowNull: false,
        },
    calories_goal: {
        type: DataTypes.INTEGER,
        allowNull: true
        },
    weekly_loss_goal: {
        type: DataTypes.INTEGER,
        allowNull: true
        }, 
    target_calories: {
        type: INTEGER,
        allowNull: true
    }, 
});


Calorie_user.associate = function(models) {
    // Associating calorie_user with Calorie_counter
    // When an Calorie_user is deleted, also delete any associated Calorie_counter
    Author.hasMany(models.Calorie_counter, {
      onDelete: "cascade"
    });
return Calorie_user;

};
};

module.exports = function(sequelize, DataTypes) {
    var Calorie_counter = sequelize.define("Calorie_counter", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        meal_date: {
            type: DataTypes.DATETIME,
            allowNull: false
        },
        foodname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        food_uom: {
            type: DataTypes.STRING,
            allowNull: true
        },   
        calories_per_uom: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        servings_consumed: {
            type: DataTypes.STRING,
            allowNull:  true
        },
        total_calories_consumed: {
            type: DataTypes.STRING,
            allowNull: true
        },
        calories_goal: {
            type: DataTypes.STRING,
            allowNull: false
        },
        remainder_goal: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        goal_deficit: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
});

Calorie_counter.associate = function(models) {
    // We're saying that a calorie_counter should belong to calorie_user
    // A calorie_counter can't be created without a calorie_user due to the foreign key constraint
    Calorie_counter.belongsTo(models.Calorie_user, {
      foreignKey: {
        allowNull: false
      }
    });

return Calorie_counter;
};
};

module.exports = function(sequelize, DataTypes) {
    var food = sequelize.define("food", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
        },
    foodname: {
        type: DataTypes.STRING,
        allowNull: false
        },
    food_uom: {
        type: DataTypes.STRING,
        allowNull: false
        },
    food_calories_uom: {
        type: DataTypes.STRING,
        allowNull: false
        },
    servings_consumed:  {
        type: DataTypes.INTEGER,
        allowNull: false
        },
    total_calories: {
        type: DataTypes.INTEGER,
        allowNull: false
    }      
});
return food;
};