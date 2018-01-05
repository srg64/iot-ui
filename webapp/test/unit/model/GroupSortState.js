sap.ui.define([
		"de/asr/iot/ui5/iotui/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("Id").length, 1, "The sorting by Id returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("SensorName").length, 1, "The sorting by SensorName returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("Id").length, 1, "The group by Id returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to Id if the user groupes by Id", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("Id");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "Id", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by SensorName and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "Id");

		this.oGroupSortState.sort("SensorName");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});