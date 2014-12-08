/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditTask.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTask
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.AddEditTask,
            value: lightSwitchApplication.AddEditTask
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.AddEditTask,
            value: lightSwitchApplication.Task
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: lightSwitchApplication.Task
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTask,
            data: lightSwitchApplication.Task,
            value: lightSwitchApplication.Task
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTask
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTask, {
        /// <field>
        /// Called when a new AddEditTask screen is created.
        /// <br/>created(msls.application.AddEditTask screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTask],
        /// <field>
        /// Called before changes on an active AddEditTask screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTask screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTask],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("Name"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTask().findContentItem("right"); }]
    });

    lightSwitchApplication.AddEditUser.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditUser
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.AddEditUser,
            value: lightSwitchApplication.AddEditUser
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.AddEditUser,
            value: lightSwitchApplication.User
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.User,
            value: lightSwitchApplication.User
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.User,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditUser,
            data: lightSwitchApplication.User,
            value: lightSwitchApplication.User
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditUser
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditUser, {
        /// <field>
        /// Called when a new AddEditUser screen is created.
        /// <br/>created(msls.application.AddEditUser screen)
        /// </field>
        created: [lightSwitchApplication.AddEditUser],
        /// <field>
        /// Called before changes on an active AddEditUser screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditUser screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditUser],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("Name"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditUser().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseTasks.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTasks
        },
        TaskList: {
            _$class: msls.ContentItem,
            _$name: "TaskList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.BrowseTasks,
            value: lightSwitchApplication.BrowseTasks
        },
        Tasks: {
            _$class: msls.ContentItem,
            _$name: "Tasks",
            _$parentName: "TaskList",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.BrowseTasks,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTasks,
                _$entry: {
                    elementType: lightSwitchApplication.Task
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Tasks",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.Task,
            value: lightSwitchApplication.Task
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.Task,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.Task,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTasks,
            data: lightSwitchApplication.Task,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTasks
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTasks, {
        /// <field>
        /// Called when a new BrowseTasks screen is created.
        /// <br/>created(msls.application.BrowseTasks screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTasks],
        /// <field>
        /// Called before changes on an active BrowseTasks screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTasks screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTasks],
        /// <field>
        /// Called after the TaskList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaskList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("TaskList"); }],
        /// <field>
        /// Called after the Tasks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tasks_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("Tasks"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("Name"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.BrowseTasks().findContentItem("Created"); }]
    });

    lightSwitchApplication.BrowseUsers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUsers
        },
        UserList: {
            _$class: msls.ContentItem,
            _$name: "UserList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.BrowseUsers,
            value: lightSwitchApplication.BrowseUsers
        },
        Users: {
            _$class: msls.ContentItem,
            _$name: "Users",
            _$parentName: "UserList",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.BrowseUsers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseUsers,
                _$entry: {
                    elementType: lightSwitchApplication.User
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Users",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.User,
            value: lightSwitchApplication.User
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.User,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.User,
            value: String
        },
        Created: {
            _$class: msls.ContentItem,
            _$name: "Created",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUsers,
            data: lightSwitchApplication.User,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUsers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseUsers, {
        /// <field>
        /// Called when a new BrowseUsers screen is created.
        /// <br/>created(msls.application.BrowseUsers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseUsers],
        /// <field>
        /// Called before changes on an active BrowseUsers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseUsers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseUsers],
        /// <field>
        /// Called after the UserList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserList_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("UserList"); }],
        /// <field>
        /// Called after the Users content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Users_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("Users"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("Name"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the Created content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Created_postRender: [$element, function () { return new lightSwitchApplication.BrowseUsers().findContentItem("Created"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }]
    });

}(msls.application));