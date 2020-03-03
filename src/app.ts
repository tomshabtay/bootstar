import { app, router, Routes } from "../lib/dy-express/app";
import bodyParser from 'body-parser';

app.use(router);

router.get('/healthcheck', Routes.healthCheck);
router.post('/healthcheck', bodyParser.json(), Routes.pong);

export default app;