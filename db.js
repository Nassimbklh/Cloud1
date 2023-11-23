const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  "postgres://vniiro_user:motdepass@dpg-clfhjv6f27hc739ckefg-a/vniiro", // TODO: database connection string
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: "added",
      updatedAt: "updated",
    },
  }
);

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
