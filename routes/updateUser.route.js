const client = require('../models/employees.pg');

const routes =  (app)=>{
    app.put('/employees_portal/api/v1/update_name/:id', (req, res)=> {
         
    
        client.query(`update employees
        set 
        emp_name = '${req.body.emp_name}'
        where emp_id = ${req.params.id}`, (err, result)=>{
            if(!err){
                res.json({
                    message:"successfully updated the employee",
                    status: "success",
                    code:203
                })
            }
            else{ console.log(err.message) }
        })
        client.end;
    })

    app.put('/employees_portal/api/v1/update_age/:id', (req, res)=> {
         
    
        client.query(`update employees
        set 
        emp_age = ${req.body.emp_age}
        where emp_id = ${req.params.id}`, (err, result)=>{
            if(!err){
                res.json({
                    message:"successfully updated the employee",
                    status: "success",
                    code:203
                })
            }
            else{ console.log(err.message) }
        })
        client.end;
    })

    app.put('/employees_portal/api/v1/update_gender/:id', (req, res)=> {
         
    
        client.query(`update employees
        set 
        emp_gender = '${req.body.emp_gender}'
        where emp_id = ${req.params.id}`, (err, result)=>{
            if(!err){
                res.json({
                    message:"successfully updated the employee",
                    status: "success",
                    code:203
                })
            }
            else{ console.log(err.message) }
        })
        client.end;
    })

    app.put('/employees_portal/api/v1/update_address/:id', (req, res)=> {
         
    
        client.query(`update employees
        set 
        emp_address = '${req.body.emp_address}'
        where emp_id = ${req.params.id}`, (err, result)=>{
            if(!err){
                res.json({
                    message:"successfully updated the employee",
                    status: "success",
                    code:203
                })
            }
            else{ console.log(err.message) }
        })
        client.end;
    })

    app.put('/employees_portal/api/v1/update_salary/:id', (req, res)=> {
         
    
        client.query(`update employees
        set 
        emp_salary = '${req.body.emp_salary}'
        where emp_id = ${req.params.id}`, (err, result)=>{
            if(!err){
                res.json({
                    message:"successfully updated the employee",
                    status: "success",
                    code:203
                })
            }
            else{ console.log(err.message) }
        })
        client.end;
    })
    
    
}

module.exports =routes;