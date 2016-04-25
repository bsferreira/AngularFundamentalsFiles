'use strict';

eventsApp.controller('EventController',
    // function EventController($scope, eventData, $log, $anchorScroll) {
    function EventController($scope, eventData, $routeParams, $route) {
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color: 'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.sortorder = 'name';
        // eventData.getEvent().
        //     success(function (event) {$scope.event = event;})
        //     .error(function (data, status, headers, config) {$log.warn(data, status, headers, config);});

        // $scope.event = eventData.getEvent($routeParams.eventId);
        $scope.event = $route.current.locals.event;
        // eventData.getEvent($routeParams.eventId)
        //     .$promise
        //         .then(function (event) {
        //             $scope.event = event;
        //             console.log(event);
        //         }).catch(function (response) {
        //             console.log(response);
        //         });
        console.log($route.current.params.foo);
        console.log($route.current.pathParams.eventId);

        $scope.reload = function () {
            $route.reload();
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function () {
            $anchorScroll();
        }
    }
);
