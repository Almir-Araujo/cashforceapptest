import express, { Request, Response } from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import orderRouter from './routes/orderRoute';

const app = express();

app.use(express.json());

// app.get('/', (req: Request, res: Response) => {
//   res.status(200).send('Testing')
// });

app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

app.use(orderRouter)

app.use(errorMiddleware)

export default app;