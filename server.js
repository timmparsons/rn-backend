import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import { dbConnection } from './constants.js';

const app = express();
app.use(cors());
const port = 3000;

const db = mysql.createConnection(dbConnection);

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get('/users', (req, res) => {
  const query = 'SELECT * FROM USERS';
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Woot woot! Server is running on port ${port}`);
});
