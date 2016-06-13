(function() {
'use strict';

angular
    .module('miniquiz')
    .config(Config);

    Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function Config($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

        $stateProvider.state('list', {
            url: '/',
            templateUrl: 'app/list/list.view.html',
            controller: 'ListController as list'
        });

        $stateProvider.state('quiz', {
            url: '/quiz',
            templateUrl: 'app/quiz/quiz.view.html',
            controller: 'QuizController as quiz'
        });
    }
})();