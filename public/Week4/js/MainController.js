var App = window.App;

App.controller('MainController', ['$scope', '$log', function ($scope, $log) {
    "use strict";

    $log.log('Controller has been created');

    $scope.personList = [
        {name: 'Jorge', age: 20, sex: 'Male'},
        {name: 'Pamela', age: 20, sex: 'Female'},
        {name: 'Jorge', age: 20, sex: 'Male'},
        {name: 'Liliana', age: 20, sex: 'Female'},
        {name: 'Karla', age: 20, sex: 'Female'},
        {name: 'Vicky', age: 20, sex: 'Female'}
    ];

    $scope.auth = true;

}]);
