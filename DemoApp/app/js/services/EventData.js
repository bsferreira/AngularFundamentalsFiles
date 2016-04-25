eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', {id:'@id'});
    return {
        getEvent: function (eventId){
            // return $http({method: 'GET', url: '/data/event/1'});
            return resource.get({id:eventId});
        },
        save: function (event) {
            event.id = 0;
            return resource.save(event);
        },
        getAllEvents: function () {
            return resource.query();
        },
    }
});