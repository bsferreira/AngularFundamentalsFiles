'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {
            emailAddress: 'default@gmail.com'
        };

        $scope.getGravatarUrl = function (email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }
    }
);

