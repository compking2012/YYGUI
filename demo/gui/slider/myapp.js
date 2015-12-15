define(function(require, exports, module) {
"use strict";

var Class = require("../../../framework/class");
var App = require("../../../framework/app/app");
var TextView = require("../../../framework/ui/view/textview");
var Slider = require("../../../framework/ui/view/slider");

Class.define("MyApp", App, {
    onStart: function() {
        this.textView = new TextView();
        this.textView.fontSize = "40px";
        this.textView.fontStyle = "normal";
        this.textView.align = "center";
        this.textView.color = "#00FF00";
        this.textView.width = 300;
        this.textView.height = 100;
        this.textView.left = 10;
        this.textView.top = 10;
        this.window.addChild(this.textView);

        this.slider = new Slider();
        this.slider.background = "#FF0000";
        this.slider.left = 20;
        this.slider.top = 200;
        this.slider.width = 280;
        this.slider.height = 80;
        this.slider.thumb = global.app.rootPath + "/res/sliderthumb.png";
        this.slider.addEventListener("change", this.onChange.bind(this));
        this.window.addChild(this.slider);

        this.slider.value = 0.5;
        this.textView.text = 0.5;
    },

    onChange: function(e) {
        this.textView.text = this.slider.value.toFixed(2);
    }
}, module);

});