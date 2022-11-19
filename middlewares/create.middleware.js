const getEmployee = (req,res)=>{
    if(!req.body.emp_id || !req.body.emp_name){
        res.json({
            message:"fields missing",
            
        })
    }
}