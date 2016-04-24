'use strict';

eventsApp.controller('CookiesStoreSampleController',

    // at the moment there's no way for angular to expire to cookies -> use a 3rd party libs
    function CookiesStoreSampleController($scope, $cookieStore) {
        $scope.event = {id: 1, name: 'My Event'};
        $scope.saveEventToCookie = function (event) {
            $cookieStore.put('event', event);
        };

        $scope.getEventFromCookie = function () {
            console.log($cookieStore.get('event'));
        };

        $scope.removeEventCookie = function (event) {
            $cookieStore.remove('event');
        }

    }
);