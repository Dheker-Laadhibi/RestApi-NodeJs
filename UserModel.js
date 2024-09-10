const mongoose = require('mongoose');
/**  Mongoose uses schemas to define the structure of documents . schema defines what fields the documents will have, their data types, */
const Schema = mongoose.Schema;
//timestamp saves the time that an action was affected to db
const userSchema = new Schema({

    nom:String,
    prenom:String,
    age:String,
    email:String
},{
timestamps:true
})

module.exports = mongoose.model('users',userSchema)