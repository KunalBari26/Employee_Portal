const client = require('../models/employees.pg');

const routes =(app)=>{
    
    app.get('/employees_portal/api/v1/get_employees',(req,res)=>{
                    client.query(`Select * from employees `,(err,result)=>{
                                        if(!err){res.send(result.rows);}
                                        else{console.log(err.message);}
                                    })
                                    client.end });

    app.get('/employees_portal/api/v1/get_employee/:id',(req,res)=>{
                    client.query(`Select * from employees where emp_id=${req.params.id}`,(err,result)=>{
                                            if(!err){res.send(result.rows);}
                                            else{console.log(err.message);}
                                     })
                                    client.end; })

    
}

module.exports =routes;
