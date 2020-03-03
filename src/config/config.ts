import { init } from "./env"

// TODO: make config. https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/configguide.md
init();
interface Config {
    project: {
        name: any
    }
    port: any,
}

export const config1: Config = {
    project: {
        name: process.env.PROJECT_NAME,
    },
    port: process.env.PORT,
}
