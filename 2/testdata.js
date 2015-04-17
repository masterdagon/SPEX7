/**
 * Created by Muggi on 16-04-2015.
 */
var data = [
    {
        name: "a",
        age: 25,
        email: "aa"
    },{
        name: "b",
        age: 225,
        email: "bb"
    },{
        name: "c",
        age: 87,
        email: "cc"
    },{
        name: "d",
        age: 50,
        email: "dd"
    },{
        name: "e",
        age: 2,
        email: "ee"
    },{
        name: "f",
        age: 125,
        email: "ff"
    },{
        name: "g",
        age: 46,
        email: "gg"
    },{
        name: "h",
        age: 38,
        email: "hh"
    },{
        name: "i",
        age: 21,
        email: "ii"
    },{
        name: "j",
        age: 15,
        email: "jj"
    }
]

function getData(amount,parameters){
    var tempdata = data;
    var result = [];
    var param = parameters.split(',');
    console.log("params:"+param[0]);
    for(var i = 0;i<amount;i++){
        var item = {};
        var random = Math.floor(Math.random()*tempdata.length);
        for(var j = 0;j<param.length;j++){
            var p = param[j];
           item[p] = tempdata[random][p];
        }
        result.push(item);
        tempdata.splice(random,1);
    }
    return result;
};

module.exports = {
    getData : getData
}