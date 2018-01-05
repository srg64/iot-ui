jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"de/asr/iot/ui5/iotui/test/integration/NavigationJourneyPhone",
		"de/asr/iot/ui5/iotui/test/integration/NotFoundJourneyPhone",
		"de/asr/iot/ui5/iotui/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});