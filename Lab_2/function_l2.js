var a = {};
var person = {};
person.name = 'Robbin_Dabank';
function isEmpy(obj){
    for(var i in obj){
        return false;
    }
    return true;
}
console.log(isEmpy(a));
console.log(isEmpy(person));

