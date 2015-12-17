(function() {
  'use strict';

  angular
    .module('zideen')
    .factory('eventUtil', eventUtil);

  /** @ngInject */
  function eventUtil(tmplUtil) {
    var args = arguments;
          
    function verifyEvent(data, option){
        if(option){
            if(option.type){
                if(data['directiveName'] && data['module'] && data['triggeredBy']){
                    return true;
                }
            } else {
                if(data['directiveName'] && data['triggeredBy']){
                    return true;
                }
            }
        } 
        
        return false;        
    }
      
    function _pubEvt(data){
        
        var event = '{directiveName}::{triggeredBy}';
        var dataStatus = verifyEvent(data, {});

        if(dataStatus){
            return tmplUtil.tmpl(event,data);
        }
    }
      
    function _pubEvtMod(data){
        var event = '{directiveName}::{module}::{triggeredBy}';
        var dataStatus = verifyEvent(data, { type: 'module' });
        
        if(dataStatus){
            return tmplUtil.tmpl(event,data);
        }
    }
 
    return {
        pubEvt: _pubEvt,
        pubEvtMod: _pubEvtMod
    };

  }
    
})();
