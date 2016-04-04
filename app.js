/**
 * Module dependencies.
 */

var express = require('express');
var fs = require('fs');

/**
 * Create Express server.
 */
var app = express();

var router = express.Router();
var path = __dirname + '/public/';

/**
 * Express configuration.
 */
app.use(express.static('public'));
app.use("/",router);

/**
 * Load index page
 */
router.get("/",function(req,res){
  res.sendFile(path + "views/index.html");
 });

/**
 * Route to get data for specific book
 */
app.get('/:id', function (req, res) {
  fs.readFile( __dirname + "/" + "dummy.json", 'utf8', function (err, data) {
    if(err) {
      console.log('Error '+err);
      return;
    }
    var books = JSON.parse(data);
    var book = books["user" + req.params.id];
    res.end( JSON.stringify(book));
  });
})

/**
 * Start Express server.
 */
app.listen(3000,function(){
  console.log("Express server listening to port 3000");
});
