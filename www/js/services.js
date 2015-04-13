angular.module('starter.services', [])

.factory('temanService', function($http) {
    var baseUrl = 'http://localhost/api/web/index.php/country/';
    return {
        getAll: function() {
            return $http.get(baseUrl+'index');
        },
    };
    
});
