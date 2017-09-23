"use strict";
exports.__esModule = true;
var Hs100Api = require("hs100-api");
var schedule = require("node-schedule");
// let Hs100Api = require("/hs100-api");
var client = new Hs100Api.Client();
var lightplug = client.getPlug({ host: '10.10.11.124' });
lightplug.getInfo().then(console.log);
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 6)];
rule.hour = 8;
// rule.minute = 35;
// rule.second = 10;
var state = true;
// @ts-ignore: optional parameters are specified in type declaration as non-optional. Not my problem!
var j = schedule.scheduleJob(rule, function () {
    console.log("wake up carter");
    // latest = !latest;
    lightplug.setPowerState(state);
});
