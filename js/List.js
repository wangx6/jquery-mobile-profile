 /**
 * List
 * @param
 * @return
 */
var jqmProfile = (function( jqmProfile ) {
    'use strict';

    var List = function( conf ) {
    	this.wrap =  $(conf.element);
        //this.ele = $('<ul data-role="listview" data-filter="true" data-filter-placeholder="Search...">').listview();
        this.store = [];
        this.listItems = {};

        this.addItem = function(item) {
            this.wrap.append(item.ele);
            this.wrap.listview('refresh');
            this.store[item.id] = item;
        };

        this.init = function() {
        	this.wrap.append(this.ele);
        };
        this.init();
    };

    jqmProfile.List = List;
    return jqmProfile;
    
})(jqmProfile || {});