/**
 * Created by derris on 15/05/15.
 */

angular.module('MyApp', []).controller('FirstController', ['$scope', function ($scope) {
    "use strict";

    $scope.formErrors = [];
    $scope.terms = false;
    $scope.invalidForm = false;

    $scope.user = {
        name: "",
        email: ""
    };

    $scope.onSubmit = function () {
        $scope.formErrors = [];
        for (var propt in $scope.user) {
            if ($scope.user[propt] === "") {
                $scope.formErrors.push("You must specified field " + propt);
            }
        }

        $scope.invalidForm  = $scope.formErrors.length > 0;

    };


}])
