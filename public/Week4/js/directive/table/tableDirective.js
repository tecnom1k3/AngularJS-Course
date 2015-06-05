var App = window.App;

App.directive('tableDirective', ['$log', function ($log) {
    "use strict";

    $log.log('Directive created');

    return {
        templateUrl: 'js/directive/table/partials/tableTemplate.html',
        scope: {
            personList: '=',
            auth: '='
        },
        restrict: 'E',
        link: function (scope, element) {
            scope.person = {};

            function initApp() {
                scope.person = {
                    name: '',
                    sex: '',
                    age: ''
                };
            }

            scope.addPerson = function () {
                scope.personList.push(scope.person);
                initApp();
            };

            scope.deletePerson = function (element) {
                scope.personList = _.filter(scope.personList, function (e) {
                    return e !== element;
                });
            };

            scope.sexClass = function (person) {
                if (person.sex === 'Male') {
                    return 'person-sex-male';
                }

                if (person.sex === 'Female') {
                    return 'person-sex-female';
                }

                if (person.sex === 'Unknown') {
                    return 'person-sex-unknown';
                }
            };

            var options = {
                //Boolean - Whether we should show a stroke on each segment
                segmentShowStroke: true,

                //String - The colour of each segment stroke
                segmentStrokeColor: "#fff",

                //Number - The width of each segment stroke
                segmentStrokeWidth: 2,

                //Number - The percentage of the chart that we cut out of the middle
                percentageInnerCutout: 50, // This is 0 for Pie charts

                //Number - Amount of animation steps
                animationSteps: 100,

                //String - Animation easing effect
                animationEasing: "easeOutBounce",

                //Boolean - Whether we animate the rotation of the Doughnut
                animateRotate: true,

                //Boolean - Whether we animate scaling the Doughnut from the centre
                animateScale: false
            };

            scope.createChart = function () {
                scope.showChart = true;

                var ctx = document.getElementById("myChart").getContext("2d");

                var data = [];
                addChartData('Male', '#F7464A', '#5AD3D1', data);
                addChartData('Female', '#FDB45C', '#FFC870', data);
                addChartData('Unknown', '#46BFBD', '#5AD3D1', data);

                var myPieChart = new Chart(ctx).Pie(data, options);
            };

            function addChartData(label, color, highlight, data) {
                var population = _.filter(scope.personList, function (e) {
                    return e.sex === label;
                });

                if (population) {
                    data.push({
                        value: population.length,
                        color: color,
                        highlight: highlight,
                        label: label
                    });
                }
            }

            initApp();
        }
    };
}]);