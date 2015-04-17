/**
 * Created by Muggi on 16-04-2015.
 */
should = require('should');
testdata = require('../testdata');

describe("Sometest",function(){
    data = testdata.getData(3,"name,email");
    it("data should contain something",function(){
        console.log(data);
        data.should.exist;
    })
})