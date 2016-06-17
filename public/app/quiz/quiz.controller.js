(function() {
    'use strict';
    angular
        .module('miniquiz')
        .controller('QuizController', QuizController);

    QuizController.$inject = ['$log', 'ProductService'];

    function QuizController($log, ProductService) {
        var quiz = this;
        quiz.list = [];
        quiz.imgUrl = ProductService.imgUrl;
        quiz.checkAnswer = checkAnswer;
        quiz.init = init;

        init();

        function init() {
            quiz.mark = 0;
            quiz.list = ProductService.getRandomQuizList(8);
            quiz.list.forEach(addAnswerStatus);
        }

        function addAnswerStatus(element, index) {
            element.answer = {
                status: 'notCheck'
            };
        }

        function checkAnswer() {
            quiz.mark = 0;
            quiz.list.forEach(function(element) {
                if (element.answer.value && element.answer.value == element.value) {
                    element.answer.status = 'correct';
                    quiz.mark += 1;
                } else {
                    element.answer.status = 'wrong';
                }
            });
        }
    }
})();
