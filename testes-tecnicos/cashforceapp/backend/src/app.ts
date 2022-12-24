import express, { Request, Response } from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import orderRouter from './routes/orderRoute';

const app = express();

app.use(express.json());

// app.get('/', (req: Request, res: Response) => {
//   res.status(200).send('Testing')
// });

app.use(orderRouter)

app.use(errorMiddleware)

export default app;