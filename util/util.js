(function($, ng) {
  'use strict';

  angular
    .module('zideen')
    .factory('util', util);

  /** @ngInject */
  function util(eventUtil, tmplUtil) {
    var args = arguments;
      
    function _isEmpty(){}
      
    function _isThruty(){}
      
    function _isFalsy(){}
    
    //initialize all util props
    (function(that){
        
        if(args){
            for( var i = 0, len = args.length; i < len; i++ ) {
                var obj = args[i];
                for( var prop in obj ) {
                    if( typeof obj[prop] === 'function' ) that[prop] = obj[prop];
                }
            }
        }
        
    }(this));
    
    return $.extend({
        map: $.map,
        bind: ng.bind,
        extend: ng.extend
    }, this, {
        isEmpty : _isEmpty,
        isThruty: _isThruty,
        isFalsy : _isFalsy
    });
  }
    
})(jQuery, angular);
