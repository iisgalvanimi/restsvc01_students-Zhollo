const express = require('express');
const router = express.Router();
module.exports = router;
const apiSommaController=require("../controller/apiSomma");

router.get('/api/somma',       apiSommaController.getSomme);
router.get('/api/somma/:N',    apiSommaController.getSomma);
router.post('/api/somma',      apiSommaController.insertSomma);
router.delete('/api/somma/:N', apiSommaController.deleteSomma);
router.put('/api/somma/:N',    apiSommaController.updateSomma);