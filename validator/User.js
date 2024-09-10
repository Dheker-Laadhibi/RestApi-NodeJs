
// importing the validator library  
const validator=require('validator');
// a module is a reusable piece of code
// it means that the code is importing a module named EmptyData from a file
const EmptyData = require('./EmptyData')

module.exports = function UserValidation(data){

    //data will represents the body of the rq 
    let errors={};
//if its not empty it will take as value prenom else will be empty

    data.prenom =!EmptyData(data.prenom)?data.prenom:'';

    data.nom =!EmptyData(data.nom)?data.nom:'';

    data.age =!EmptyData(data.age)?data.age:'';


    data.email =!EmptyData(data.email)?data.email:'';


//       is a function that checks if a string is empty or not (validator.isEmpty(data.age)

    if(validator.isEmpty(data.prenom)){
         errors.prenom='firstname required '
    }if(validator.isEmpty(data.nom)){
         errors.nom='Lastname required '
    }if(validator.isEmpty(data.email)){
         errors.email='email required '
    }if(validator.isEmpty(data.age)){
         errors.age='age required '
    }

    if(!validator.isEmail(data.email)){
         errors.email='email  not correct '
    }



    return{
        //is used to determine if there are any errors
        errors,

        //Since errors is an object that will have properties if there are validation errors,
        // EmptyData(errors) will return false if there are errors and true if errors is empty
        isValid : EmptyData(errors)
    }

}