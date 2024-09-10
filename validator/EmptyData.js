

//just to test if the object is null or not
const EmptyData = value =>value === null || value === undefined
//that object has no properties
||(typeof value ==='object'&& Object.keys(value).length===0)
// trim used to remove whitespace
||(typeof value ==='string'&& value.trim().length===0)
module.exports=EmptyData
