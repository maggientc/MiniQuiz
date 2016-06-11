(function() {
    'use strict';
    angular
        .module('miniquiz')
        .factory('ProductDataService', ProductDataService);

    function ProductDataService() {
        var data = [{
                name: '韭菜',
                value: 34,
                image: 'chive.jpg'
            }
        ];

        return {
            data: data
        };
    }
})();
