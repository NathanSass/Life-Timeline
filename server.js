(function(){

  'use strict';
  var express = require('express');
  var reloader = require('connect-livereload')
  var app = express();


  app.use(express.static('.'));

  app.listen(9000, function(){
    console.log('App Listening on localhost:9000');
  });

})();