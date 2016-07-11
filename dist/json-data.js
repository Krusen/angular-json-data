(function() {
    'use strict';

    angular
        .module('json-data', [])
        .directive('jsonData', jsonData);

    jsonData.$inject = ["$parse"];

    function jsonData($parse) {

        var directive = {
            link: link,
            restrict: 'EA',
            scope: false
        };
        return directive;
        
        function link(scope, element, attrs) {
            var data = null;

            if (attrs.model || attrs.callback) {
                var text = element.text();
                data = angular.fromJson(text);
            }

            if (data && attrs.model) {
                var getter = $parse(attrs.model);
                getter.assign(scope, data);
            }

            if (data && attrs.callback) {
                var callback = $parse(attrs.callback);
                callback(scope, {data: data});
            }
            
            if (attrs.whenAllInitialized) {
                var whenAllInitialized = $parse(attrs.whenAllInitialized);
                whenAllInitialized(scope);
            }

            var keepElement = "keepElement" in attrs;
            if (!keepElement) {
                element.remove();
            }
        }
    }
})();