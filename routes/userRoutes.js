
const express = require('express');
const router = express.Router();
const usrController = require('../controllers/userController');

router.get('/', usrController.getAllUsers);
/*
router.get('/:id',usrController.getUsrById);
router.post('/', usrController.createUsr);
router.put('/:id',usrController.updateUsr);
router.delete('/:id', usrController.deleteUsr);
*/

module.exports = {
    router
};