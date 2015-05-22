/**
 * Created by derris on 15/05/15.
 */

var ProfileApp = window.ProfileApp;

ProfileApp.controller('ProfileController', ['$scope', '$log', 'ProfileService', function ($scope, $log, ProfileService) {
    "use strict";

    $log.log('Controller has been created');

    $scope.formErrors = [];
    $scope.terms = false;
    $scope.invalidForm = false;

    var alreadySubmitted = false;

    $scope.user = {
        name: "",
        jobTitle: "",
        state: "",
        postalCode: "",
        mobilePhone: "",
        email: "",
        picture: "../images/empty.png"
    };

    /**
     * It listen any change to the User object, if this has been already submitted
     */
    $scope.$watch('user', function (newVal, oldVal) {
        if (alreadySubmitted && (newVal != oldVal)) {
            formValidation();
        }
    }, true);

    $scope.onSubmit = function () {
        alreadySubmitted = true;
        formValidation();
    };

    /**
     * It has the basic validation for this Form
     */
    function formValidation() {
        $scope.formErrors = [];
        for (var propt in $scope.user) {
            if ($scope.user[propt] === "") {
                $scope.formErrors.push("You must specified field " + propt);
            }
        }

        if (!$scope.terms) {
            $scope.formErrors.push("You must accept terms and conditions ");
        }


        $scope.invalidForm = $scope.formErrors.length > 0;
    }

    $scope.onLoadPreviousData = function () {
        $scope.user = ProfileService.getProfileData();
    };

}]);
