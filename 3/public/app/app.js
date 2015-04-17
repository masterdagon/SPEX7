var app = angular.module('viewApp', ['ngRoute']);

var persons = [
    {id:1,name:"Jens",age:18},
    {id:2,name:"Peter",age:28},
    {id:3,name:"Hanne",age:38}
];

app.config(function ($routeProvider) {
    $routeProvider
        .when("/list", {
            templateUrl: "views/list.html",
            controller: "ListController"
        })
        .when("/details/:id", {
            templateUrl: "views/details.html",
            controller: "DetailsController"
        })
        .when("/new",{
            templateUrl: "views/new.html",
            controller: "ListController"
        })
});

app.controller("ListController",function($scope){
    $scope.persons = persons;

    $scope.update = function(){
        $scope.person.id = persons.length+1;
        persons.push($scope.person);
    };
});

app.controller("DetailsController",function($scope,$routeParams){
    var id = $routeParams.id;
    $scope.person = persons[id-1];
})

app.controller("NewController",function($scope){

})
