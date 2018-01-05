jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Sensors in the list
// * All 3 Sensors have at least one SensorDataDetails

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/asr/iot/ui5/iotui/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/asr/iot/ui5/iotui/test/integration/pages/App",
	"de/asr/iot/ui5/iotui/test/integration/pages/Browser",
	"de/asr/iot/ui5/iotui/test/integration/pages/Master",
	"de/asr/iot/ui5/iotui/test/integration/pages/Detail",
	"de/asr/iot/ui5/iotui/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.asr.iot.ui5.iotui.view."
	});

	sap.ui.require([
		"de/asr/iot/ui5/iotui/test/integration/MasterJourney",
		"de/asr/iot/ui5/iotui/test/integration/NavigationJourney",
		"de/asr/iot/ui5/iotui/test/integration/NotFoundJourney",
		"de/asr/iot/ui5/iotui/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});