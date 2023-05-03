var express = require('express');
var router = express.Router();
 
router.get('/user', function(req, res) {
    res.send(`Lista todos os usuários`);
});
 
router.post('/user', function(req, res) {
    res.send(`Inclui um usuário`);
});
 
router.put('/user/:id', function(req, res) {
    res.send(`Edita o usuário ${req.params.id}`);
});
 
router.delete('/user/:id', function(req, res) {
    res.send(`Exclui o usuário ${req.params.id}`);
});
module.exports = router;