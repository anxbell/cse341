const routes = require('express').Router();

const myController = require('../controllers')

routes.get('/', myController.personName);
routes.get('/awesome', myController.anotherPerson);

module.exports = routes;