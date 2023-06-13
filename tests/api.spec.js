const request = require('supertest');
const app = require('../app');

describe('GET /sum', () => {
    test('Return status 200 and sum data', (done) => {
      request(app).get('/sum').send({ x: 5, y: 10 }).then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
        expect(res.body.status).toBe(true);
        expect(res.body.message).toEqual("Parameters summarized!");
        expect(res.body.data.x).toEqual(5);
        expect(res.body.data.y).toEqual(10);
        expect(res.body.data.result).toEqual(15);
        done();
      });
    });
   });
   