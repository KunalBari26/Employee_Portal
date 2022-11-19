const { Client } = require("pg");
require('dotenv').config();
const configs = require('../configs/serverConfigs')

const client = new Client({
        user: "postgres",
        host: "localhost",
        database: "employee",
        password: "pass",
        port: 5432
})


 
module.exports = client