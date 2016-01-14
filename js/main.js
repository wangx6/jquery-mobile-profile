var jqmProfile = (function(jqmProfile, data) {
    'use strict';

    var list = [];
    var kk;

    function createList(data) {
        var list = new jqmProfile.List({
                element: '#page-two__listview'
            }),
            listData = data.profile.list,
            listItem, i = 0,
            ln = data.profile.list.length;

        for (; i < ln; i++) {
            listItem = new jqmProfile.ListItem({
                data: listData[i]
            });
            list.addItem(listItem);
        }
    }

    $(document).on("pageshow", '#page-two', function(event) {
        kk = data;
        createList(data);
    });

    $(document).on("pageinit", '#page-one', function(event) {
        console.log("page one ...");
        $(document).on("swiperight", function(e) {
            // We check if there is no open panel on the page because otherwise
            // a swipe to close the left panel would also open the right panel (and v.v.).
            // We do this by checking the data that the framework stores on the page element (panel: open).
            console.log('#########');
            if ($.mobile.activePage.jqmData("panel") !== "open") {
                if (e.type === "swiperight") {
                    $("#left-panel").panel("open");
                }
            }
        });
    });


})(jqmProfile || {}, (function() {
    return {
        "profile": {
            "list": [{
                "id": "11",
                "name": "what is going on"
            }, {
                "id": "22",
                "name": "what is going on"
            }, {
                "id": "33",
                "name": "what is going on"
            }, {
                "id": "44",
                "name": "what is going on"
            }, {
                "id": "55",
                "name": "what is going on"
            }, {
                "id": "66",
                "name": "what is going on"
            }, {
                "id": "77",
                "name": "what is going on"
            }, {
                "id": "11",
                "name": "what is going on"
            }, {
                "id": "22",
                "name": "what is going on"
            }, {
                "id": "33",
                "name": "what is going on"
            }, {
                "id": "44",
                "name": "what is going on"
            }, {
                "id": "55",
                "name": "what is going on"
            }, {
                "id": "66",
                "name": "what is going on"
            }, {
                "id": "77",
                "name": "what is going on"
            }, {
                "id": "11",
                "name": "what is going on"
            }, {
                "id": "22",
                "name": "what is going on"
            }, {
                "id": "33",
                "name": "what is going on"
            }, {
                "id": "44",
                "name": "what is going on"
            }, {
                "id": "55",
                "name": "what is going on"
            }, {
                "id": "66",
                "name": "what is going on"
            }, {
                "id": "77",
                "name": "what is going on"
            }, {
                "id": "11",
                "name": "what is going on"
            }, {
                "id": "22",
                "name": "what is going on"
            }, {
                "id": "33",
                "name": "what is going on"
            }, {
                "id": "44",
                "name": "what is going on"
            }, {
                "id": "55",
                "name": "what is going on"
            }, {
                "id": "66",
                "name": "what is going on"
            }, {
                "id": "77",
                "name": "what is going on"
            }, {
                "id": "11",
                "name": "what is going on"
            }, {
                "id": "22",
                "name": "what is going on"
            }, {
                "id": "33",
                "name": "what is going on"
            }, {
                "id": "44",
                "name": "what is going on"
            }, {
                "id": "55",
                "name": "what is going on"
            }, {
                "id": "66",
                "name": "what is going on"
            }, {
                "id": "77",
                "name": "what is going on"
            }, {
                "id": "11",
                "name": "what is going on"
            }, {
                "id": "22",
                "name": "what is going on"
            }, {
                "id": "33",
                "name": "what is going on"
            }, {
                "id": "44",
                "name": "what is going on"
            }, {
                "id": "55",
                "name": "what is going on"
            }],
            "name": "YingHan Wang",
            "header": {
                "backgroundUrl": "bakcground url",
                "headShot": "head shot url",
                "personal": "statement"
            },
            "projects": [{
                "name": "project",
                "description": "description",
                "screenshot": "screen shot url"
            }, {
                "name": "project",
                "description": "description",
                "screenshot": "screen shot url"
            }, {
                "name": "project",
                "description": "description",
                "screenshot": "screen shot url"
            }],
            "footer": {
                "backgroundUrl": "background url footer",
                "content": [{
                    "block": {
                        "content": "content"
                    }
                }, {
                    "block": {
                        "content": "content"
                    }
                }, {
                    "block": {
                        "content": "content"
                    }
                }]
            }
        }
    };

})());
