
var dfchls = {
    addPushMenu: function ($element, menuoptions) {
        //see http://multi-level-push-menu.make.rs/
        try {
            //check if options are set:
            if ((undefined === menuoptions) || (null === menuoptions)) {
                var menuoptions = {}
            }
            checkMenuOptions(menuoptions);
            if ($element[0].innerHTML == "") {

                // Create Menu
               $element.multilevelpushmenu({
                    menu: menuoptions["menu"],
                    collapsed: menuoptions["collapsed"],
                    containersToPush: menuoptions["containersToPush"],
                    overlapWidth: menuoptions["overlapWidth"],
                    onItemClick: function() {
                        // First argument is original event object
                        var event = arguments[0],
                        // Second argument is menu level object containing clicked item (<div> element)
                        $menuLevelHolder = arguments[1],
                        // Third argument is clicked item (<li> element)
                        $item = arguments[2],
                        // Fourth argument is instance settings/options object
                        options = arguments[3];
                        var itemName = $item.find('a:first').text();

                        //this property is for using Navigation in LightSwitch: e.g. myapp.showBrowseUsers
                        if (menuoptions["useLsNavigation"] == true) {
                            var pageToOpen = $item.find('a:first').attr("page");
                            eval('myapp.' + pageToOpen + '()');
                        }

                        // Collapse menu
                        $element.multilevelpushmenu('collapse');
                        
                        
                    }
                });
            }
        } catch (e) {
            console.log(e);
        }
        
    }

}

function checkMenuOptions(menuoptions) {
    if (!menuoptions.hasOwnProperty("menu")) { menuoptions["menu"] = arrMenu; }
    if (!menuoptions.hasOwnProperty("collapsed")) { menuoptions["collapsed"] = true; }
    if (!menuoptions.hasOwnProperty("containersToPush")) { menuoptions["containersToPush"] = [$("div[data-role*='page']")]; }
    if (!menuoptions.hasOwnProperty("overlapWidth")) { menuoptions["overlapWidth"] = 40; }
    if (!menuoptions.hasOwnProperty("useLsNavigation")) { menuoptions["useLsNavigation"] = true; }
    

}

//obsolete:
/*
function updateContainersToPush() {
    
        try {

            // Array hold the ContainersToPush
            var arrContainersToPush = [];

            // Loop thru each LightSwitch page named 'page'
            $("div[data-role*='page']").each(function() {
                // Add the page to the array
                var LightSwitchPage = $(this)[0];
                arrContainersToPush.push(LightSwitchPage);
            });

            // Loop thru each LightSwitch header page named 'header'
            //$("div[data-role*='header']").each(function() {
            //    // Add the page to the array
            //    var LightSwitchHeaderPage = $(this)[0];
            //    arrContainersToPush.push(LightSwitchHeaderPage);
            //});

            // Set the containersToPush for the menu
            $('#menu').multilevelpushmenu('option', 'containersToPush', arrContainersToPush);
        } catch (e) {
            console.log(e);
            dfchls.addPushMenu($('#menu'), null);
        }
    

}
*/