import express, { ErrorRequestHandler, Request, Response } from 'express';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Testing')
});

app.use(errorMiddleware)

export default app;