require('dotenv').config();

module.exports = {
    development: {
        username: "vjnambi",
        password: env.MYSQL_PASSWORD,
        database: "mywebsitedb",
        host: "vjnambidb.mysql.database.azure.com",
        dialect: "mysql"
    },
    test: {
        username: "vjnambi",
        password: process.env.MYSQL_PASSWORD,
        database: "mywebsitedb",
        host: "vjnambidb.mysql.database.azure.com",
        dialect: "mysql"
    },
    production: {
        username: "vjnambi",
        password: process.env.MYSQL_PASSWORD,
        database: "mywebsitedb",
        host: "vjnambidb.mysql.database.azure.com",
        dialect: "mysql"
    }
};