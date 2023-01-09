import { Router } from 'express';
import mockData from '../mock-data/mock-data';
// Services
import UsersService from './users-service';

const usersRouter = Router();

usersRouter
  // Get all users
  .route('/')
  .get((req, res, next) => {
    UsersService.getUsers(mockData)
      .then(response => res.json(response))
      .catch(next)
  });

usersRouter
  // Get a random user
  .route('/random')
  .get((req, res, next) => {
    UsersService.getRandomUser(mockData)
      .then(response => res.json(response))
      .catch(next)
  });

export default usersRouter;
