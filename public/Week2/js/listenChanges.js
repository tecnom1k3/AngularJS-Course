/**
 * Created by derris on 13/05/15.
 */

angular.module('MyApp', []).controller('FirstController', ['$scope', function ($scope) {

    $scope.maxNumber = 100;
    $scope.number = 0;
    $scope.invalid = false;

    /**
     * Option 1
     */

    $scope.onNumberChange = function () {
        $scope.invalid = ($scope.number >= $scope.maxNumber);
    };

    /**
     * Option 2
     */

    /*
    $scope.$watch('number', function (newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
            $scope.invalid = ($scope.number >= $scope.maxNumber);
        }
    });
    */

}])
