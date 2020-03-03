import app from "./app";
import { config1 } from "./config/config";

app.listen(config1.port, () => console.log(`[${config1.project.name}] Listening on port ${config1.port}`));