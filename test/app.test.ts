import request from "supertest";
import app from "../src/app";

describe("GET /healthcheck", () => {
    it("should return 200 OK", () => {
        return request(app).get("/healthcheck")
            .expect(200);
    });
});
