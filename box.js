pc.script.attribute("thrust", "number", 350);
pc.script.attribute("torque", "number", 40);


pc.script.create('box', function (app) {
    // Creates a new Box instance
    var Box = function (entity) {
        this.entity = entity;
    };

    Box.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            alert("test");
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            /*
            if (context.keyboard.isPressed(pc.input.KEY_A)) {
                //this.entity.rigidbody.applyTorqueImpulse(0, 0, this.torque);
            }
            */
            /*
            if (context.keyboard.isPressed(pc.input.KEY_D)) {
                //this.entity.rigidbody.applyTorqueImpulse(0, 0, -this.torque);
            }
            */
        }
    };

    return Box;
});