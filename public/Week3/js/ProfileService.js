/**
 * Created by derris on 22/05/15.
 */

var ProfileApp = window.ProfileApp;

ProfileApp.service('ProfileService', ['$log', 'RestService', function ($log, RestService) {
    "use strict";
    $log.log('Service has been injected');

    this.getProfileData = function() {
        return RestService.UserProfileServiceHandler.getProfile().query();
    };

}]);
