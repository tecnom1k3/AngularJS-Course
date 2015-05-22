
var ProfileApp = window.ProfileApp;

ProfileApp.service('RestService', ["$log", "$resource", function ($log, $resource) {
    "use strict";

    $log.log("RestService Loaded");


    //$http.get('file.ext');

    this.UserProfileServiceHandler = {
        getProfile: function () {
            return $resource('../jsonTest/profileData.json', {}, {query: {method: 'GET', params: {}}});
        }
    };
}]);
