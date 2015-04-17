/**
 * Created by Muggi on 16-04-2015.
 */
var should = require("should");
var request = require('request');

describe("get requests", function () {
    users = null;
    describe("get /api/users -- show all users", function () {
        before(function (done) {
            request.get('http://localhost:3000/api/users', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    users = JSON.parse(body);
                }
                done();

            })
        });
        it("Should return JSON array with users. length 9", function () {
            users.length.should.equal(9);
        })
    });

    describe("get /api/users/:email -- show user with provided email", function () {
        var user = 1;
        before(function (done) {
            request.get('http://localhost:3000/api/users/'+users[0].email, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    user = JSON.parse(body);
                }
                done();

            })
        });
        it("Should return JSON with user matching email provided", function () {
            user.email.should.equal(users[0].email);
        })
    });

});

describe("post requests", function () {
    var users = null;
    describe("post /api/users -- create new user", function () {
        var user = null;
        var exists = false;
        before(function (done) {
            request.post('http://localhost:3000/api/users',{ form: { email: 'test@test.test',password:'test' } }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    user = JSON.parse(body);
                }
                if (!error && response.statusCode == 400) {
                    exists = true;
                }
                done();

            })
        });
        it("Should contain user with password test", function () {
            if(exists){
                exists.should.equal(true);
            }else{
                user.password.should.equal('test');
            }

        })
    });

});

describe("put requests", function () {
    describe("put /api/users/:email -- change password", function () {
        var user = null;
        var exists = false;
        before(function (done) {
            request.put('http://localhost:3000/api/users/test@test.test',{ form: { email: 'test@test.test',password:'test2' } }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    user = JSON.parse(body);
                }
                if (!error && response.statusCode == 404) {
                    exists = true;
                }
                done();

            })
        });
        it("Should contain user with password test2", function () {
            if(exists){
                exists.should.equal(true);
            }else{
                user.password.should.equal('test2');
            }

        })
    });

});

describe("delete requests", function () {
    describe("delete /api/users/:email -- delete user", function () {
        var user = null;
        var exists = false;
        before(function (done) {
            request.del('http://localhost:3000/api/users/test@test.test',function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    user = JSON.parse(body);
                }
                if (!error && response.statusCode == 404) {
                    exists = true;
                }
                done();

            })
        });
        it("Should contain user with email test@test.test", function () {
            //if(exists){
            //    exists.should.equal(true);
            //}else{
                user.email.should.equal('test@test.test');
            //}

        })
    });

});