'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout) {

        // setTimeout(function () {
        //     $scope.name = 'Bruno Ferreira';
        // }, 3000);
        
        var promise = $timeout(function () {
            $scope.name = 'Bruno Ferreira';
        }, 3000);

        $scope.cancel = function () {
            $timeout.cancel(promise);
        };
    }
);