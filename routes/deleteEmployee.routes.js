const client = require('../models/employees.pg');


const routes =  (app)=>{
app.delete('/employees_portal/api/v1/delete_employee', (req, res)=> {
    

    client.query(`delete from employees where emp_id=${req.body.emp_id}`, (err, result)=>{
        if(!err){
            res.josn({
                message:'Deletion of employee was successful',
                status:'success',
                code:200
            })
        }
        else{ console.log(err.message) }
    })
    client.end;
})
}
module.exports =routes;
