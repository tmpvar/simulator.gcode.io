var io;
if (typeof require !== "undefined") {
  io = require("../io.js");
} else {
  io = window.io;
}

var ok = function(a, msg) { if (!a) throw new Error(msg || "not ok"); };
var eq = function(a, b) { if (a!==b) throw new Error(a + " !== " + b); };

describe('io', function() {
  describe('#', function() {
    it('', function() {
      
    });
  });
});
