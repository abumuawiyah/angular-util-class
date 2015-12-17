(function() {
  'use strict';

  angular
    .module('zideen')
    .factory('tmplUtil', tmplUtil);

  /** @ngInject */
  function tmplUtil() {
    
    function tmpl(str,data){
        for(var prop in data) {
            str=str.replace(new RegExp('{'+prop+'}','g'), data[prop]);
        }
        return str;
    }
      
    return {
        tmpl: tmpl
    };
  }
    
})();
