/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Task, {
        /// <field>
        /// Called when a new task is created.
        /// <br/>created(msls.application.Task entity)
        /// </field>
        created: [lightSwitchApplication.Task]
    });

    msls._addEntryPoints(lightSwitchApplication.User, {
        /// <field>
        /// Called when a new user is created.
        /// <br/>created(msls.application.User entity)
        /// </field>
        created: [lightSwitchApplication.User]
    });

}(msls.application));
