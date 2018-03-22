var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.query.state_id)
	connection.query('SELECT * from city where state_id='+req.query.state_id, function (error, results, fields) {
	  	res.setHeader('Content-Type', 'application/json');
  		res.setHeader('Accept','application/json');
	  	if(error){
	  		res.send(JSON.stringify({"status": 500, "error": true, "response": null})); 
	  		//If there is error, we send the error in the error section with 500 status
	  	} else {
  			res.send(JSON.stringify({"status": 200, "error": false, "response": results}));
  			//If there is no error, all is good and response is 200OK.
	  	}
  	});
});

module.exports = router;
