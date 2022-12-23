import express from 'express';

const app = express();
const { PORT = 3001 } = process.env;

app.use(express.json());
// app.use(routes);
// app.use(ErrorHandler.handle);

export default app;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});