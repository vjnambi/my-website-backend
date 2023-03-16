require('dotenv').config();

module.exports = {
    development: {
        username: "vjnambi",
        password: process.env.MySQL_Password,
        database: "mywebsitedb",
        host: "vjnambidb.mysql.database.azure.com",
        dialect: "mysql"
    },
    test: {
        username: "vjnambi",
        password: process.env.MySQL_Password,
        database: "mywebsitedb",
        host: "vjnambidb.mysql.database.azure.com",
        dialect: "mysql"
    },
    production: {
        username: "vjnambi",
        password: process.env.MySQL_Password,
        database: "mywebsitedb",
        host: "vjnambidb.mysql.database.azure.com",
        dialect: "mysql"
    }
};