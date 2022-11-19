const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const client = require('./models/employess.pg');
const config = require('./configs/serverConfigs');


const getEmployees = require('./routes/getEmployee.routes');
const createEmployees = require('./routes/createEmployee.route')
const updateEmployees = require('./routes/updateUser.route');
const deleteEmployees = require('./routes/deleteEmployee.routes')


client.connect();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


getEmployees(app);
createEmployees(app);
updateEmployees(app);
deleteEmployees(app);



app.listen(config.PORT, async ()=>{
    await console.log("Server Started on Port",config.PORT);
})
