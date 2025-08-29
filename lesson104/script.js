const user = {
        yana : {
        age: 28,
        isAdmin: true,
        sayHello(name){
            return `Hello, ${name}`;
        }
    }
};

let simpleUsers = 0;

const users = [
{
    name: 'Yana',
    age: 28,
    isAdmin: true
 },
 {
    name: 'Petya',
    age: 30,
    isAdmin: false
 },
 {
    name: 'Masha',
    age: 25,
    isAdmin: false
 },
 {
    name: 'Masha',
    age: 31,
    isAdmin: true
 }
];

function countOfSimpleUsers(usersArray){
    for(let i = 0; i < usersArray.length; i++){
        if(usersArray[i].isAdmin == false){
            simpleUsers++;
        }
    }
    return simpleUsers;
}

console.log(countOfSimpleUsers(users));

