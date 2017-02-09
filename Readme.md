# koa4listen

## Installation

```bash
$ npm install --save koa4listen
```

## Example

```js
var createServer = require('koa4listen');
var opts = require('cert4https');
var app = require('koa')();
var server = createServer(app, opts);
server.on('listening', function () {
  var web_listen = server.address().address + ':' + server.address().port;
  console.log('service listein on ' + web_listen);
});
server.listen(3000);
```
