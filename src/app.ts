import express from "express";
import { healthCheck } from "./components/healthcheck/healthcheck";

// Create Express server
const app = express();

// Routes
app.get('/healthcheck', healthCheck);

export default app;