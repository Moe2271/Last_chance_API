import express from 'express';
import route from './routes/route';
import fs from 'fs';

const app = express();
const port = 4000;

app.use('/', route.routes);

if (!fs.existsSync('./Thumnail')) {
  fs.mkdirSync('./Thumnail');
}

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}/fjord.jpg/150/150`);
});
export default app;
