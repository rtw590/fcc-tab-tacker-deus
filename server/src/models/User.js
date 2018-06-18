const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"));

// Function for hashing the users password
function hashPassword(user, options) {
  const SALT_FACTOR = 8;
  // If the password hasn't changed then we do not need to hash
  if (!user.changed("password")) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue("password", hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    },
    {
      hooks: {
        beforeSave: hashPassword
      }
    }
  );

  User.prototype.comparePassword = function(password) {
    return bcrypt.compareAsync(password, this.password);
  };

  return User;
};
