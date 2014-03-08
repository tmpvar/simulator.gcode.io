var io = function() {
  
}


if (typeof module !== "undefined" && typeof module.exports == "object") {
  module.exports = io;
}

if (typeof window !== "undefined") {
  window.io = window.io || io;
}
