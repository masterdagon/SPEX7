var myApp = angular.module('DemoApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/cars", {
            templateUrl: "cars.html",
            controller: "CarController"
        })
        .when("/form/:id", {
            templateUrl: "form.html",
            controller: "FormController"
        })
});

myApp.controller('CarController', ['$scope', "CarFactory", function ($scope, CarFactory) {
    $scope.title = "Cars Demo App";
    $scope.predicate = "year";
    $scope.cars = CarFactory.getCars();
    $scope.delete = function(id){
        CarFactory.deleteCar(id);
    }
}]);

myApp.controller('FormController', ['$scope', "CarFactory","$routeParams", function ($scope, CarFactory,$routeParams) {
    var id = $routeParams.id;
    $scope.cars = CarFactory.getCars();
    for(var i=0;i<$scope.cars.length;i++){
        if($scope.cars[i].id==id){
            $scope.car = angular.copy($scope.cars[i]);

            //the code below did not work for some reason, it locked the properties. Everytime i would change something and click save, it never updated???
            //{
            //    id : id,
            //    year : $scope.cars[i].year,
            //    registered : $scope.cars[i].registered,
            //    make : $scope.cars[i].make,
            //    model : $scope.cars[i].model,
            //    description : $scope.cars[i].description,
            //    price : $scope.cars[i].price
            //}
        }
    }
    $scope.savecar = function(){
        CarFactory.addEditCar($scope.car);
        $scope.car = {};
    }


    var id = $routeParams.id;

    $scope.cars = CarFactory.getCars();

    for(var i in $scope.cars) {
        if($scope.cars[i].id == id) {
            $scope.car = angular.copy($scope.cars[i]);
        }
    }

    $scope.saveCars = function() {
        CarFactory.addEditCar($scope.car);
        $scope.car = {};
    }

}]);

myApp.factory('CarFactory', function () {
    var cars = [
        { id: 1, year: 1997,registered: new Date(1999,3,15), make: 'Ford',model: 'E350', description: 'ac, abs, moon', price: 3000 }
        ,{ id: 2, year: 1999,registered: new Date(1996,3,12), make: 'Chevy', model: 'Venture', description: 'None', price: 4900 }
        ,{ id: 3, year: 2000,registered: new Date(199,12,22), make: 'Chevy', model: 'Venture', description: '', price: 5000 }
        ,{ id: 4, year: 1996,registered: new Date(2002,3,15), make: 'Jeep', model: 'Grand Cherokee',description: 'Moon roof',price: 4799 }]
    var nextId = 5;
    var getCars = function () {return cars;}
    var deleteCar = function (id) {
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].id === id) {
                cars.splice(i, 1);
                return;
            }
        }
    }
    var addEditCar = function(newcar){
        if (newcar.id == null) {
            newcar.id = nextId++;
            cars.push(newcar);
        }
        else {
            for (var i = 0; i < cars.length; i++) {
                if (cars[i].id === newcar.id) {
                    cars[i] = newcar;
                    break;
                }
            }
        }
    }
    return {
        getCars: getCars,
        deleteCar: deleteCar,
        addEditCar: addEditCar
    };
});
