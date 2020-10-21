import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';
import TaskController from './app/controllers/TaskController';

const route = new Router();

route.post('/users', UserController.store);
route.put('/users', AuthMiddleware, UserController.update);

route.post('/sessions', SessionController.store);

route.post('/tasks', AuthMiddleware, TaskController.store);
route.get('/tasks', AuthMiddleware, TaskController.index);
route.put('/tasks/:task_id', AuthMiddleware, TaskController.update);
route.delete('/tasks/:task_id', AuthMiddleware, TaskController.delete);

export default route;
