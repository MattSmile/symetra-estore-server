require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';

import adminRouter from './admin/admin-router';
import usersRouter from './users/users-router';
import productsRouter from './products/products-router';
import purchasesRouter from './purchases/purchases-router';

const app = express();

const morganOpt = (config.NODE_ENV === 'production') ? 'tiny' : 'common';

app.use(
  morgan(morganOpt),
  helmet(),
  cors(config.CLIENT_ORIGIN)
);

// API Endpoint Routers
app.use('/api/admin', adminRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/purchases', purchasesRouter);

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let response;
  if (config.NODE_ENV === 'production') {
    response = {
      error: {
        message: 'server error'
      }
    };
  } else {
    // tslint:disable-next-line:no-console
    console.error(err);
    response = {
      message: err.message, err
    };
  }
  res.status(500).json(response)
};

app.use(errorHandler);

export default app;
