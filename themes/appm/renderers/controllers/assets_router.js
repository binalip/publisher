/*
 Description: Renders the assets.jag view
 Filename:assets.js
 Created Date: 29/7/2013
 */

var render = function (theme, data, meta, require) {




    var lifecycleColors = {"Create": "btn-green", "Demote": "btn-blue", "Re-Submit": "btn-blue", "Submit": "btn-blue", "Publish": "btn-blue", "Unpublish": "btn-orange", "Deprecate": "btn-danger", "Retire": "btn-danger", "Approve": "btn-blue", "Reject": "btn-orange"};


    if(data.artifacts){

        for(var i = 0; i < data.artifacts.length; i++){
            var lifecycleAvailableActionsButtons = new Array();
            for(var j = 0; j < data.artifacts[i].lifecycleAvailableActions.length; j++){
                var name = data.artifacts[i].lifecycleAvailableActions[j];

                for(var k = 0; k < data.roles.length; k++){
                    //	print(data.roles[k]);
                    if(data.roles[k] == "admin" || data.roles[k] == "Internal/publisher"){
                        if(name == "Approve"){
                            lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
                        }
                        if(name == "Reject"){
                            lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
                        }
                        if(name == "Publish"){
                            lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
                        }
                        if(name == "Submit"){
                            lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
                        }
                        if(name == "Create"){
                            lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
                        }
                        if(name == "Deprecate"){
                            lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
                        }
                        if(name == "Re-Submit"){
                            lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
                        }
                        if(name == "Unpublish"){
                            lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
                        }
                        if(name == "Depreicate"){
                            lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
                        }
                        if(name == "Retire"){
                            lifecycleAvailableActionsButtons.push({name: name, style: lifecycleColors[name]});
                        }

                        break;
                    }

                }


            }

            data.artifacts[i].lifecycleAvailableActions = lifecycleAvailableActionsButtons;
        }



    }

    var listPartial = 'list-assets';

//Determine what view to show
    switch (data.op) {
        case 'list':
            listPartial = 'list-assets';
            data = require('/helpers/view-asset.js').format(data);
            break;
        case 'statistics':
            listPartial = 'statistics';
            break;
        case 'apps':
            listPartial = 'apps';
            break;
        case 'app_sub_user':
            listPartial = 'app_sub_user';
            break;
        case 'response-time':
            listPartial = 'response-time';
            break;
        case 'usage-page':
            listPartial = 'usage-page';
            break;
        case 'abc':
                   listPartial = 'apps';
                    break;

        default:
            break;
    }


    var breadCrumbData = require('/helpers/breadcrumb.js').generateBreadcrumbJson(data);
    breadCrumbData.activeRibbonElement = listPartial;
    //var addAssetUrl = "/publisher/asset/" + data.meta.shortName +"";
    theme('single-col-fluid', {
        title: data.title,
        header: [
            {
                partial: 'header',
                context: data
            }
        ],
        ribbon: [
            {
                partial: 'ribbon',
                context: breadCrumbData
            }
        ],
        leftnav: [
            {
                partial: 'left-nav',
                context: require('/helpers/left-nav.js').generateLeftNavJson(data, listPartial)
            }
        ],
        listassets: [
            {
                partial: listPartial,
                context: data
            }
        ]
    });
};
