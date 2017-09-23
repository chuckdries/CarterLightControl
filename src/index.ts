import Hs100Api from "hs100-api";
import schedule from "node-schedule";

let client = new Hs100Api.Client();
let lightplug = client.getPlug({ host: '10.10.11.124' });
lightplug.getInfo().then(console.log);

let rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 6)]
rule.hour = 8;
// rule.second = 1; //use this rule in lieu of other two rules to toggle his lights every minute

let state: boolean = true;
// @ts-ignore: optional parameters are specified in type declaration as non-optional. Not my problem!
let j = schedule.scheduleJob(rule, function () {
    console.log("wake up carter");
    // state = !state; //toggle, to annoy him.
    lightplug.setPowerState(state);
});