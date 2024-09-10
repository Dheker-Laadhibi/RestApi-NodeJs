
/**module call */
 const UserModel = require('./UserModel')
const users = require('./UserModel')
 const UserValidator = require('./validator/User')


const addUser = async(req,res)=>{

const{errors,isValid}=UserValidator(req.body)


//if error exists 
if(!isValid){
   return   res.status(404).json({errors})
}
// data sent in form 
const Result= await users.create(req.body)

    res.status(201).json({Result})


}

const getUsers=async(req,res)=>{

    try {
        const users = await User.find({})
        res.status(201).send(users)
    } catch (error) {
        res.status(500).send(Error)
    }
}










const getUser=async(req , res)=>{

try {
    const user = await User.find({_id:req.params.id})
    res.status(201).send(user)
} catch (error) {
    res.status(500).send(Error)
}


}
const updateUser=async(req , res)=>{

    try {
        const user = await User.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:req.body},
            //tells Mongoose to return the updated document instead of the original one.
            {new:true});
            if(!user){
                res.status(201).send('not found')
            }
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(Error)
    }
    
    
    }


    const deleteUser=async(req , res)=>{

        try {
             await User.findOneAndDelete(
                {_id:req.params.id})
               
                
            res.status(201).send(' delete sucesss');
        } catch (error) {
            res.status(500).send(Error)
        }
        
        
        }

module.exports = {
    addUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
   

}