define(function(require, exports, module) {

"use strict";
var Class = require("../../class");
var YObject = require("../../yobject");

/**
 * Base class for event
 * @class Event
 * @extends YObject
 */
Class.define("framework.ui.event.Event", YObject, {
    initialize: function(options) {
        this._target = options.target !== undefined ? options.target : null;
        this._type = options.type !== undefined ? options.type : "";
        this._timestamp = options.timestamp !== undefined ? options.timestamp : 0;
    },

    /**
     * @name Event#target
     * @type {View}
     * @description event send target.
     * @readonly
     */
    get target() {
        return this._target;
    },

    /**
     * @name Event#type
     * @type {String}
     * @description the type of this event.
     * @readonly
     */
    get type() {
        return this._type;
    },

    /**
     * @method Event#timestamp
     * @type {Number}
     * @description the timestamp of this event.
     * @readonly
     */
    get timestamp() {
        return this._timestamp;
    }
}, module);

});
