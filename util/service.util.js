(function() {
  'use strict';

  angular
    .module('zideen')
    .factory('serviceUtil', serviceUtil);

  /** @ngInject */
  function serviceUtil() {

      return {
          
        data: {},
        getData: function(){
            return data;
        },
        setData: function(data){
            this.data = data;
        }

      };
  }
    
})();
