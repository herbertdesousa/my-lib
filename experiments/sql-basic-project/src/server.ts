import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

console.log('asdads');

app.listen(app.get('port'), () => {
  console.log(`Server is listening on port ${app.get('port')}`);
});
