import * as dotenv from "dotenv";
import * as path from 'path';

export function init() {
    let envPath;
    switch (process.env.NODE_ENV) {
        case "test":
            envPath = getPath('.env.test');
            break;
        case "production":
            envPath = getPath('.env.production');
            break;
        default:
            envPath = getPath('.env.development');
    }
    
    dotenv.config({ path: envPath });
};

function getPath(filename: string) {
    return path.resolve(process.cwd(), '.env.development');
};