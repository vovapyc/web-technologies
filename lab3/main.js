(function () {
    'use strict';

    angular.module('App', [])
        .controller('AppController', AppController);

    AppController.$inject = ['$scope'];

    function AppController($scope) {
        $scope.text = "";
        $scope.list = "";

        $scope.showAnswer = function () {
            $scope.text = result($scope.list);
        }

        function result(i) {
            let elem = i.split(',') || i.split(' ');

            for (let i = elem.length - 1; i >= 0; i--) {
                if (elem[i].trim() === "") elem.splice(i, 1);
            }
            if (elem.length === 0) {
                return "Будь ласка, уведіть дані!";
            } else if (elem.length <= 3) {
                return "На здоров'я!";
            } else {
                return "Це забагато!";
            }
        }
    }
})();