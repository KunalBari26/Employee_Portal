const client = require('../models/employess.pg');

const routes =(app)=>{
    app.get('/employees_portal/api/vi/get_employees',(req,res)=>{
                    client.query(`Select * from employees `,(err,result)=>{
                                        if(!err){res.send(result.rows);}
                                        else{console.log(err.message);}
                                    })
                                    client.end });

    app.get('/employees_portal/api/vi/get_employee/:id',(req,res)=>{
                    client.query(`Select * from employees where emp_id=${req.params.id}`,(err,result)=>{
                                            if(!err){res.send(result.rows);}
                                            else{console.log(err.message);}
                                     })
                                    client.end; })

    
}

module.exports =routes;
