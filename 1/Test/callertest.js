/**
 * Created by Muggi on 16-04-2015.
 */
var should = require('should');
var caller = require('../caller');

describe("Testing caller.js",function(){

    describe("Testing getUsers",function(){
        var users = null;
        before(function(done){
            caller.getUsers(function(err,userlist){
                if(err){
                    throw err;
                }else{
                   users = userlist;
                }
                done();
            })
        })
        it("should return list of users",function(){
            users.should.exist;
        })
    })

    describe("testing getUser",function(){
        var user = null;
        before(function(done){
            caller.getUser('ultricies.adipiscing@utaliquam.ca',function(err,user1){
                if(err){
                    throw err;
                }else{
                    user = user1;
                }
                done();
            })
        })
        it("should return an user",function(){
            user.should.exist;
        })
    })

    describe("testing addUser",function(){
        var user = null;
        before(function(done){
            caller.addUser({email:"testingemail",password:"123"},function(err,user1){
                if(err){
                    throw err;
                }else{
                    user = user1;
                }
                done();
            })
        })
        it("should return an user with password 123",function(){
            user.password.should.equal("123");
        })
    })

    describe("testing updateUser",function(){
        var user = null;
        before(function(done){
            caller.updateUser({email:"testingemail",password:"456"},function(err,user1){
                if(err){
                    throw err;
                }else{
                    user = user1;
                }
                done();
            })
        })
        it("should return an user with password 456",function(){
            user.password.should.equal("456");
        })
    })

    describe("testing deleteUser",function(){
        var user = null;
        before(function(done){
            caller.deleteUser({email:"testingemail",password:"456"},function(err,user1){
                if(err){
                    throw err;
                }else{
                    user = user1;
                }
                done();
            })
        })
        it("should return an user with password",function(){
            user.password.should.equal("456");
        })
    })

})