import express from 'express';
import { healthCheck, pong } from './routes/healthcheck/healthcheck';

const app = express();
const router = express.Router();
const Routes = {
    healthCheck,
    pong,
}

export { app, router, Routes };