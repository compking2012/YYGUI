define(function(require, exports, module) {

"use strict";
var Class = require("/framework/class");
var CompositeView = require("/framework/ui/view/compositeview");
var ImageView = require("/framework/ui/view/imageview");

Class.define("Clock6BigGears", CompositeView, {
    initialize: function() {
        CompositeView.prototype.initialize.apply(this, arguments);

        this.bigGear2 = new ImageView();
        this.bigGear2.src = "res/6/big_gear_2.png";
        this.bigGear2.width = 104;
        this.bigGear2.height = 104;
        this.bigGear2.originX = 52;
        this.bigGear2.originY = 52;

        this.bigGear1 = new ImageView();
        this.bigGear1.src = "res/6/big_gear_1.png";
        this.bigGear1.width = 104;
        this.bigGear1.height = 104;
        this.bigGear1.originX = 52;
        this.bigGear1.originY = 52;

        this.bigGearBgProjection = new ImageView();
        this.bigGearBgProjection.src = "res/6/big_gear_bg_projection.png";
        this.bigGearBgProjection.width = 104;
        this.bigGearBgProjection.height = 104;

        this.addChild(this.bigGear2);
        this.addChild(this.bigGear1);
        this.addChild(this.bigGearBgProjection);
        this.now = 0;
    },

    setTime: function(time) {
        this.now = time;
        var sec = this.now.getSeconds();
        this.bigGear1.rotationZ = -Math.PI / 30 * sec;
        this.bigGear2.rotationZ = Math.PI / 60 * sec;
    }
}, module);

});
