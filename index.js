module.exports = function (app, opts) {
  opts = opts || {};
  if (opts.cert && opts.key) {
    var https = require("https");
    return https.createServer(opts, app.callback());
  }
  var http = require("http");
  return http.createServer(app.callback());
}

