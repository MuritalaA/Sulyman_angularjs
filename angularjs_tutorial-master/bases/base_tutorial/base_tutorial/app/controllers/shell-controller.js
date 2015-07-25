(function () {

    'use strict';

    var moduleId = 'app';
    var controllerId = 'shellController';

    angular.module(moduleId).controller(controllerId, shellController);

    shellController.$inject = [];

    function shellController() {
        var vm = this;
        vm.name = 'Base Tutorial';
    }

})();