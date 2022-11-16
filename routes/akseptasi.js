var express = require('express');
var router = express.Router();
var controllers = require('../controllers/akseptasiC');
var sikp = require('../controllers/sikp');

// router.all('/', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     next();
//   });

/* GET users listing. */
router.get('/', controllers.getAkseptasi);
router.get('/getDokumenPembatalan', controllers.getDokumenPembatalan);
router.post('/pembatalan', controllers.pembatalanAkseptasi);
router.get('/wsdl', controllers.wsdl);
router.get('/getdetailpembatalan', controllers.getDetailPembatalan);
router.get('/approvepembatalan', controllers.approvalPembatalan);
router.get('/getallpembatalan', controllers.getAllPembatalan);
router.get('/saa', controllers.schedulerSAA);
router.get('/terbitcbc', controllers.updatePolisCBC);
router.post('/inquiry', controllers.inquiryAkseptasi);
// router.get('/schedulerMandiri', controllers.schedulerMandiri);
// router.post('/', controllers.postAkseptasi);
router.post('/', controllers.postAkseptasiStaging);
router.post('/putsikp', controllers.putSIKP);
router.get('/covflagbatch', controllers.postAkseptasiCoveringFlagBulk);
router.post('/postsikp', controllers.postSIKP)
router.post('/postsikpjpas', controllers.postSIKPJPAS)
router.post('/putsikpjpasbatch', controllers.putSIKPJPASBatch)
// router.post('/bulk/', controllers.postAkseptasiBulk);
router.post('/covvalidation', controllers.postAkseptasiCoveringValidation);
router.post('/covflag', controllers.postAkseptasiCoveringFlag);
router.post('/bulk/', controllers.postAkseptasiStagingBulk);
//router.post('/cekdebitur', controllers.cekDebitur);
router.get('/sikpauth', sikp.auth);


module.exports = router;
