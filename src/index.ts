import * as Hs100Api from "hs100-api";
import * as schedule from "node-schedule";
// let Hs100Api = require("/hs100-api");

let client = new Hs100Api.Client();
let lightplug = client.getPlug({ host: '10.10.11.124' });
lightplug.getInfo().then(console.log);

let rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 6)]
rule.hour = 8;
// rule.minute = 35;
// rule.second = 10;

let state: boolean = true;
// @ts-ignore: optional parameters are specified in type declaration as non-optional. Not my problem!
let j = schedule.scheduleJob(rule, function () {
    console.log("wake up carter");
    // latest = !latest;
    lightplug.setPowerState(state);
});