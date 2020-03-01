import express from 'express';
import { setupRoutes } from './routes';

const PORT = 3000;
// Create Express server
const app = express();
setupRoutes(app);
// Routes
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
export default app;
// TODO: separate Express 'app' and 'server' https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/separateexpress.md