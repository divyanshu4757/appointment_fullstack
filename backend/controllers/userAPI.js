const User_details = require('../models/userData')





exports.createUser = (req,res,next)=>{     

    const data = req.body; 
    User_details.create({
        Name:data.Name,
        Email:data.Email,
        Phone_number:data.Phone
    })
    .then((result)=>{
          const id=result.dataValues.id;
          res.json({userId:id});
      })
  };


exports.getUsers =(req,res,next)=>{     

    User_details.findAll()
    .then((result)=>{
        const pureResult = result.map(key=>key.dataValues)
       
        res.json(pureResult);

    })
    .catch((error)=>{
        console.log(error);
    })

  };


exports.deleteUser =(req,res,next)=>{ 
    const id = req.params.id;
    User_details.destroy({where:{id:id}})
    .then((result)=>{
          res.json({message:'User deleted'});
      })
      .catch(error=>{
         console.log(error);
      })
}