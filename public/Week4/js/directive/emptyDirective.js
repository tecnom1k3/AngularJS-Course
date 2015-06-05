var App = window.App;

App.directive('emptyDirective', ['$log', function ($log) {
    "use strict";

    $log.log('Directive created');

    return {
        template: '<h1>Hello</h1>',
        restrict: 'E',
        link: function(scope, element){
            element.find('h1').css('color', 'red');
        }
    };
}]);