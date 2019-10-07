const Postfixer = require('../postfixer');
const assert = require("assert");

describe("Postfixer tests", function() {
	it("2 + ( 4 - 99 ) / 2 to 2 4 + 99 -", function() {
		assert.equal(Postfixer.convert('2 + ( 4 - 99 ) / 2'), '2 4 99 - 2 / +');
	});

	it("4 + ( - ( - ( -4 ) ) ) / 2 to 4 4 - - - 2 / +", function() {
		assert.equal(Postfixer.convert('4 + ( - ( - ( -4 ) ) ) / 2'), '4 -4 - - 2 / +');
	});

	it("sqrt ( 5 ) to 5 sqrt", function() {
		assert.equal(Postfixer.convert('sqrt ( 5 )'), '5 sqrt');
	});

	it("-4 - 4 to -4 4 -", function() {
		assert.equal(Postfixer.convert('-4 - 4'), '-4 4 -');
	});
});