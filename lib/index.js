"use strict";
exports.__esModule = true;
var hs100_api_1 = require("hs100-api");
var node_schedule_1 = require("node-schedule");
var client = new hs100_api_1["default"].Client();
var lightplug = client.getPlug({ host: '10.10.11.124' });
lightplug.getInfo().then(console.log);
var rule = new node_schedule_1["default"].RecurrenceRule();
rule.dayOfWeek = [new node_schedule_1["default"].Range(1, 6)];
rule.hour = 8;
// rule.second = 1; //use this rule in lieu of other two rules to toggle his lights every minute
var state = true;
// @ts-ignore: optional parameters are specified in type declaration as non-optional. Not my problem!
var j = node_schedule_1["default"].scheduleJob(rule, function () {
    console.log("wake up carter");
    // state = !state; //toggle, to annoy him.
    lightplug.setPowerState(state);
});
