import express, { Express, Request, Response } from "express";
import path from 'path';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/api', (req: Request, res: Response) => {
    res.json({ "ok": true });
});

app.use('/', express.static(path.join(__dirname, 'www')));

app.listen(port, () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
});