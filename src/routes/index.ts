import { Router } from 'express';
import { Express } from 'express';
import { healthCheck, pong } from './healthcheck/healthcheck';
import bodyParser from 'body-parser';

export const setupRoutes = (app: Express): void => {
    const router = Router();
    app.use(router);
    router.get(
        '/healthcheck',
        healthCheck);
    router.post(
        '/healthcheck',
        bodyParser.json(),
        pong);
};