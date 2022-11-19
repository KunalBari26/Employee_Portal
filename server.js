const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const client = require('./models/employees.pg');
const config = require('./configs/serverConfigs');


const getEmployees = require('./routes/getEmployee.routes');
const createEmployees = require('./routes/createEmployee.route')
const updateEmployees = require('./routes/updateUser.route');
const deleteEmployees = require('./routes/deleteEmployee.routes')


client.connect();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


getEmployees(app);
createEmployees(app);
updateEmployees(app);
deleteEmployees(app);



app.listen(config.PORT, async ()=>{
    await console.log("Server Started on Port",config.PORT);
})
