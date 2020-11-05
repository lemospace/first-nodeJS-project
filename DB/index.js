const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_project', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 8889
});

const Image = require('./Image')(sequelize);

module.exports = {
    sequelize: sequelize,
    image: Image
}
