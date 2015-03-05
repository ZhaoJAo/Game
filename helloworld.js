pc.script.create('helloworld', function (app) {
    // Creates a new Helloworld instance
    var Helloworld = function (entity) {
        this.entity = entity;
    };

    Helloworld.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        }
    };

    return Helloworld;
});