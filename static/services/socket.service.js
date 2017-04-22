(function(){
    "use strict";

    var url = 'ws://localhost:8888';

    function Socket() {
        var _this = this;

        _this.ws = null;
        _this.onMessageListeners = [];

        var connect = function(path) {
            // var url = endpoint + '/' + path;

            _this.ws = new WebSocket(url);
            _this.ws.onmessage = function(event) {
                _this.onMessageListeners.forEach(function(fn) {
                    fn.call(_this, event);
                });
            };
        };

        var subscribe = function(fn) {
            _this.onMessageListeners.push(fn);
        };

        return {
            connect: connect,
            subscribe: subscribe,
        }
    }

    angular.module('utils')
        .factory('socket', function() {
            var socket = new Socket();
            socket.connect();
            return socket;
        });
})();
