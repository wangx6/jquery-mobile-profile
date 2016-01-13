var jqmProfile = (function(jqmProfile) {
    'use strict';

    var _data;
    var list = [];

    function requestData(callback) {
        if (getData()) return callback(getData());
        $.ajax({url: 'data/profile.json' })
        	.done(function(response) {
            	setData(JSON.parse(response));
            	return callback(getData());
        	});
    }

    // function createList(data) {
    //     var list = new jqmProfile.List(),
    //         listData = data.profile.list,
    //         listItem, i = 0, ln = data.profile.list.length;

    //     for (; i < ln; i++) {
    //         listItem = new jqmProfile.ListItem({ data: listData[i] });
    //         list.addItem(listItem.ele);
    //     }
    // }

    function setData(data) { _data = data; }

    function getData() { return _data; }

    $(document).on("pagecreate", '#page-two', function(event) {
        requestData(function(data) {
            //createList(data);
        });
    });

    $(document).on("pagecreate", '#page-one', function(event) {
        console.log("page one ...");
    });

})(jqmProfile || {});
