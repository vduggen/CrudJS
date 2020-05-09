const express = require('express');
const routes = express.Router();

const CompanyController = require('./controllers/CompanyController.js');

routes.get('/company', CompanyController.list);
routes.post('/company', CompanyController.create);
routes.put('/company/:id', CompanyController.update);
routes.delete('/company/:id', CompanyController.delete);

module.exports = routes;