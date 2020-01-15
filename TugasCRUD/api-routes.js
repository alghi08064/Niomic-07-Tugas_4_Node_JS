
// initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
  res.json({
    status: "API is working",
    message: "Welcome"
  });
});

//import controller
var siswaController = require('./siswaController');

//contact ApiRoutes
router.route('/contacts')
.get(siswaController.index)
.post(siswaController.new);

router.route('/contacts/:contact_id')
.get(siswaController.view)
.patch(siswaController.update)
.put(siswaController.update)
.delete(siswaController.delete);

//export API
module.exports = router;
