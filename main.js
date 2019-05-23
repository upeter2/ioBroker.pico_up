"use strict";

/*
 * Created with @iobroker/create-adapter v1.14.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");

// Load your modules here, e.g.:
// const fs = require("fs");

class PicoUp extends utils.Adapter {

	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		super({
			...options,
			name: "pico_up",
		});
		this.on("ready", this.onReady.bind(this));
		this.on("objectChange", this.onObjectChange.bind(this));
		//this.on("stateChange", this.onStateChange.bind(this));
		// this.on("message", this.onMessage.bind(this));
		//this.on("unload", this.onUnload.bind(this));
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
     
     
     //uwe
          

test(a,url)
{          
var request= require('request');
request.post({url:'http://pvserver:pvwr@192.168.0.20'}, function(error, response, body){if (body) {
      //var parts_WP = body.split('\n')[1].split(' ')[0];
      var n= body.indexOf("aktuell</td>");
      var m = body.indexOf("</td>",n+20);
      var out = body.substr((n+65),m-n-65);
      a.setStateAsync("aktuell", out);
      
      //log(n);
      //log(m);
      //log(out);
//AC_Leistung_Status
  var n= body.indexOf("Status</td>");
  var m = body.indexOf("</td>",n+20);
  var out = body.substr((n+33),m-n-33);
  
  a.setStateAsync("AC_Leistung_Status", out);

 //Energie_Gesamtertrag
  var n= body.indexOf("Gesamtenergie</td>");
  var m = body.indexOf("</td>",n+30);
  var out = body.substr((n+70),m-n-70);
   
   a.setStateAsync("Energie_Gesamtertrag", out);
 
  //Energie_Tagesertrag_Aktuell
  var n= body.indexOf("Tagesenergie</td>");
  var m = body.indexOf("</td>",n+20);
  var out = body.substr((n+70),m-n-70);
  
  a.setStateAsync("Energie_Tagesertrag_Aktuell", out);
   
  //PV_Generator_String1_Spannung
  var n= body.indexOf("Spannung</td>",m);
  var m = body.indexOf("</td>",n+20);
  var out = body.substr((n+66),m-n-66);
  
  a.setStateAsync("String1_Spannung", out);
  
 //Ausgangsleistung_L1_Spannung
  var n= body.indexOf("Spannung</td>",m);
  var m = body.indexOf("</td>",n+20);
  var out = body.substr((n+66),m-n-66);

  a.setStateAsync("L1_Spannung", out);

  
  //PV_Generator_String1_Strom
  var n= body.indexOf("Strom</td>",m);
  var m = body.indexOf("</td>",n+20);
  var out = body.substr((n+63),m-n-63);
  
    a.setStateAsync("String1_Strom", out);

   //Ausgangsleistung_L1_Leistung
  var n= body.indexOf("Leistung</td>",m);
  var m = body.indexOf("</td>",n+20);
  var out = body.substr((n+66),m-n-66);
  
    a.setStateAsync("L1_Leistung", out);
   
  //PV_Generator_String2_Spannung
   var n= body.indexOf("Spannung</td>",m);
  var m = body.indexOf("</td>",n+20);
   var out = body.substr((n+66),m-n-66);
   
     a.setStateAsync("String2_Spannung", out);
   
   //Ausgangsleistung_L2_Spannung
  var n= body.indexOf("Spannung</td>",m);
  var m = body.indexOf("</td>",n+20);
  var out = body.substr((n+66),m-n-66);
  
    a.setStateAsync("L2_Spannung", out);
   
  //PV_Generator_String2_Strom
  var n= body.indexOf("Strom</td>",m);
  var m = body.indexOf("</td>",n+20);
  var out = body.substr((n+63),m-n-63);
  
    a.setStateAsync("String2_Strom", out);
   
   //Ausgangsleistung_L2_Leistung

  var n= body.indexOf("Leistung</td>",m);
  var m = body.indexOf("</td>",n+20);
  var out = body.substr((n+66),m-n-66);
  
    a.setStateAsync("L2_Leistung", out);
   
   
   //Ausgangsleistung_L3_Spannung

  var n= body.indexOf("Spannung</td>",m);
  var m = body.indexOf("</td>",n+20);
  var out = body.substr((n+66),m-n-66);
  
    a.setStateAsync("L3_Spannung", out);
   

   //Ausgangsleistung_L3_Leistung

   var n= body.indexOf("Leistung</td>",m);
  var m = body.indexOf("</td>",n+20);
   var out = body.substr((n+66),m-n-66);

     a.setStateAsync("L3_Leistung", out);

   
 } }) }

     
     
     
     //uwe
     
     
     
     
     
	async onReady() {
		// Initialize your adapter here

		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:
		//this.log.info("config option1: " + this.config.option1);
		//this.log.info("config option2: " + this.config.option2);
        this.log.info("IP: " + this.config.ip);
		/*
		For every state in the system there has to be also an object of type state
		Here a simple template for a boolean variable named "testVariable"
		Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		*/
        
         
        
        await this.setObjectAsync("aktuell", {type: "state",common: {name: "aktuell",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("Energie_Gesamtertrag", {type: "state",common: {name: "Energie_Gesamtertrag",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("Energie_Tagesertrag_Aktuell", {type: "state",common: {name: "Energie_Tagesertrag_Aktuell",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("String1_Spannung", {type: "state",common: {name: "String1_Spannung",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("L1_Spannung", {type: "state",common: {name: "L1_Spannung",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("String1_Strom", {type: "state",common: {name: "String1_Strom",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("L1_Leistung", {type: "state",common: {name: "L1_Leistung",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("String2_Spannung", {type: "state",common: {name: "String2_Spannung",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("L2_Spannung", {type: "state",common: {name: "L2_Spannung",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("String2_Strom", {type: "state",common: {name: "String2_Strom",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("L2_Leistung", {type: "state",common: {name: "L2_Leistung",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("L3_Spannung", {type: "state",common: {name: "L3_Spannung",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("L3_Leistung", {type: "state",common: {name: "L3_Leistung",type: "mixed",role: "state",read: true,write: true,},native: {},});
        await this.setObjectAsync("AC_Leistung_Status", {type: "state",common: {name: "AC_Leistung_Status",type: "mixed",role: "state",read: true,write: true,},native: {},});

		// in this template all states changes inside the adapters namespace are subscribed
		this.subscribeStates("*");

		/*
		setState examples
		you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		*/
		// the variable testVariable is set to true as command (ack=false)
		//await this.setStateAsync("testVariable", true);

		// same thing, but the value is flagged "ack"
		// ack should be always set to true if the value is received from or acknowledged from the target system
		//await this.setStateAsync("testVariable", { val: true, ack: true });

		// same thing, but the state is deleted after 30s (getState will return null afterwards)
		//await this.setStateAsync("testVariable", { val: true, ack: true, expire: 30 });

		// examples for the checkPassword/checkGroup functions
		//let result = await this.checkPasswordAsync("admin", "iobroker");
		//this.log.info("check user admin pw ioboker: " + result);

		//result = await this.checkGroupAsync("admin", "admin");
		//this.log.info("check group user admin group admin: " + result);
	        await this.test(this,this.config.ip);
		this.stop();	        
        
        
        
	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			this.log.info("cleaned everything up...");
			callback();
		} catch (e) {
			callback();
		}
	}

	/**
	 * Is called if a subscribed object changes
	 * @param {string} id
	 * @param {ioBroker.Object | null | undefined} obj
	 */
	onObjectChange(id, obj) {
		if (obj) {
			// The object was changed
			this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
		} else {
			// The object was deleted
			this.log.info(`object ${id} deleted`);
		}
	}

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	onStateChange(id, state) {
		if (state) {
			// The state was changed
			this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
		}
	}

	// /**
	//  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
	//  * Using this method requires "common.message" property to be set to true in io-package.json
	//  * @param {ioBroker.Message} obj
	//  */
	// onMessage(obj) {
	// 	if (typeof obj === "object" && obj.message) {
	// 		if (obj.command === "send") {
	// 			// e.g. send email or pushover or whatever
	// 			this.log.info("send command");

	// 			// Send response in callback if required
	// 			if (obj.callback) this.sendTo(obj.from, obj.command, "Message received", obj.callback);
	// 		}
	// 	}
	// }

}

// @ts-ignore parent is a valid property on module
if (module.parent) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new PicoUp(options);
} else {
	// otherwise start the instance directly
	new PicoUp();
}
