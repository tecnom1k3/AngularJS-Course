/**
 * Created by derris on 8/05/15.
 */

angular.module('MyApp', [])
    .controller('FirstController', ['$scope', function ($scope) {

        $scope.newPerson = {
            name: '',
            age: 0,
            email: ''
        };

        $scope.groupList = [];

        $scope.onAddPerson = function(){
            $scope.groupList.push({name: $scope.newPerson.name, age: $scope.newPerson.age, email: $scope.newPerson.email});
            $scope.newPerson = {
                name: '',
                age: 0,
                email: ''
            };
        };

    }]);