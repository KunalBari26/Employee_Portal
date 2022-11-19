const client = require('../models/employess.pg');

const routes =  (app)=>{
   
    app.post('/employees_portal/api/v1/createEmployees', (req,res)=>{
        const createQuery =`insert into employees(emp_id, emp_name,emp_age,emp_address,emp_salary ,emp_gender) values(${req.body.emp_id} ,'${req.body.emp_name}' ,'${req.body.emp_age}','${req.body.emp_address}','${req.body.emp_salary}','${req.body.emp_gender}')`;

        client.query(createQuery,(err,result)=>{
                if(!err){res.json({
                        message:"employee successfully created",
                         status:"success",
                         code:201
                    });}
                else{ console.log(err.message)}
       })
       client.end;
    })
    
}

module.exports =routes;