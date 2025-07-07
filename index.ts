import server from './server'
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the API!');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
});


