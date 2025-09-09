const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const routes = Router();

routes.post('/pessoas', PessoaController.create);
routes.get('/pessoas', PessoaController.readAll);
routes.get('/pessoas/:id', PessoaController.readById);
routes.put('/pessoas/:id', PessoaController.update);
routes.delete('/pessoas/:id', PessoaController.delete);

module.exports = routes;