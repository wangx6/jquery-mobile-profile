/**
     * ListItem
     * @param
     * @return
     */

 /**
     * List
     * @param
     * @return
     */
var jqmProfile = (function( jqmProfile ) {
    'use strict';

    var ListItem = function(conf) {
        this.ele = null;
        this.data = conf.data;
        this.init = function() {
            var me = this;
            this.ele = $('<li class="page-two__list__item">' + this.data.id + '-' + this.data.name + '</li>');
            this.ele.on('tap', function() {
                console.log(me.data);
            });
        };
        this.init();
    };

    jqmProfile.ListItem = ListItem;
    return jqmProfile;
    
})(jqmProfile || {});
