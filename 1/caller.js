/**
 * Created by Muggi on 16-04-2015.
 */
var request = require('request');

function getUsers(callback){
    request.get('http://localhost:3000/api/users', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(null,JSON.parse(body));
        }else{
            callback(true);
        }

    })

}

function getUser(email,callback){
    request.get('http://localhost:3000/api/users/'+email, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(null,JSON.parse(body));
        }else{
            callback(true);
        }

    })
}

function addUser(user,callback){
    request.post('http://localhost:3000/api/users',{ form: user }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(null,JSON.parse(body));
        }else{
            callback(true);
        }

    })
}

function updateUser(user,callback){
    request.put('http://localhost:3000/api/users/' + user.email, {
        form: {
            email: user.email,
            password: user.password
        }
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(null, JSON.parse(body));
        } else {
            callback(true);
        }

    })
}

function deleteUser(user,callback){
    request.del('http://localhost:3000/api/users/'+user.email,function (error, response, body) {
        if (!error && response.statusCode == 200) {
            callback(null,JSON.parse(body));
        }else{
        callback(true)}
    });
}

module.exports = {
    getUsers : getUsers,
    getUser : getUser,
    addUser : addUser,
    updateUser : updateUser,
    deleteUser : deleteUser
}