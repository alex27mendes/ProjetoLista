var myApp = angular.module("myApp",[]);

myApp.controller("myController", function($scope){
    console.log("funcionando");
    $scope.users = [
        {username: "rimom1", fullname: "R. Manunur Rashid", email: "r@gmail.com"},
        {username: "rimom2", fullname: "R. Manunur Rashid", email: "r@gmail.com"},
        {username: "rimom3", fullname: "R. Manunur Rashid", email: "r@gmail.com"},
        {username: "rimom4", fullname: "R. Manunur Rashid", email: "r@gmail.com"},
    ];
});