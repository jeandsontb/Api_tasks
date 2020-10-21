import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';

const route = new Router();

route.post('/users', UserController.store);
route.put('/users', AuthMiddleware, UserController.update);

route.post('/sessions', SessionController.store);

export default route;
