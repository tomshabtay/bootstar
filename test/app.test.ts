import request from 'supertest';
import app from '../src/app';

describe('Testing /healthcheck', () => {
    it('GET should return 200', () => {
        return request(app)
            .get('/healthcheck')
            .expect(200);
    });

    it('POST should send messsage back', () => {
        return request(app)
            .post('/healthcheck')
            .send({ messsage: 'pong' })
            .expect(200)
            .then(res => {
                expect(res.body.message).toBe('pong');
            });
    });
});
