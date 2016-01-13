 /**
     * List
     * @param
     * @return
     */
var jqmProfile = (function( jqmProfile ) {
    'use strict';

    var List = function() {
    	this.wrap =  $('#page-two__list');
        this.ele = $('<ul data-role="listview" data-filter="true" data-filter-placeholder="Search...">').listview();
        this.store = [];
        this.listItems = {};

        this.addItem = function(item) {
            this.ele.append(item);
            this.ele.listview('refresh');
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