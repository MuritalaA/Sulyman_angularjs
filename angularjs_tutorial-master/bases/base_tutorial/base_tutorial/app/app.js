(function () {

    'use strict';

    var moduleId = 'app';

    angular.module(moduleId, []);

    angular.element(document).ready(function () {
        angular.element(document.body).attr('ng-controller', 'shellController as shellCtrl');
        angular.bootstrap(document, [moduleId]);
    });
})();