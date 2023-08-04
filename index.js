import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';
import path from 'path';

const __dirname = path.resolve();

const app = express();

app.use(cors());
app.use(express.urlencoded()); // for removing deprecated warning we can pass {extended:true} to the urlencoded()
app.use(express.json()); // for removing deprecated warning we can pass {extended:true} to the json()
app.use('/', routes);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get('*', function(_, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function(err) {
        res.sendStatus(500).send(err);
    })
})

const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));