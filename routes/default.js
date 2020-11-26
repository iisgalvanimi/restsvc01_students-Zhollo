const express = require('express');
const router = express.Router();
module.exports = router;
const defaultController=require("../controller/default");

router.get('/restituisci_testo',      defaultController.getGetText);
router.get('/restituisci_valore/:N',  defaultController.getVal);
router.get('/',                       defaultController.getIndex);
router.get('/index.html',             defaultController.getIndex);