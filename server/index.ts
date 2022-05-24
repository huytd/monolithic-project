import express, { Response, Request } from 'express';

const app = express();

app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ result: true });
});

export const handler = app;