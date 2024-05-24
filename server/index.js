import express from 'express'
import router from './route/route.js';
import cors from 'cors'
import DBconnection from './database/dbconnection.js';
const app = express();

app.use(cors());
app.use('/',router)

DBconnection();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is runnin on Port ${PORT}`)
})