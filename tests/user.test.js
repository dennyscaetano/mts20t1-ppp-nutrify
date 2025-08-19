const request = require('supertest');
const app = require('../src/server');
const { reset } = require('../src/repositories/db');

describe('User Endpoints', () => {
  beforeEach(() => reset());
  it('should register a user', async () => {
    const res = await request(app)
      .post('/users/register')
      .send({ name: 'Teste', email: 'teste@exemplo.com', password: '123456' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should login a user', async () => {
    await request(app)
      .post('/users/register')
      .send({ name: 'Teste', email: 'login@exemplo.com', password: '123456' });
    const res = await request(app)
      .post('/users/login')
      .send({ email: 'login@exemplo.com', password: '123456' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
