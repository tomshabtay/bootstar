import { Request, Response } from 'express';

export const healthCheck = (req: Request, res: Response) => {
    res.send('success');
};

export const pong = (req: Request, res: Response) => {
    console.log(req.body);
    res.send({
        message: req.body.messsage
    });
};
