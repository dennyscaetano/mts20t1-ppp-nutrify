const request = require('supertest');
const app = require('../../src/server');
const { reset } = require('../../src/repositories/db');

describe('Endpoints de Alimentos (unitários)', () => {
  beforeAll(() => reset());
  let token;
  beforeAll(async () => {
    await request(app)
      .post('/users/register')
      .send({ name: 'Food', email: 'food@exemplo.com', password: '123456' });
    const res = await request(app)
      .post('/users/login')
      .send({ email: 'food@exemplo.com', password: '123456' });
    token = res.body.token;
  });

  it('deve criar um alimento', async () => {
    const res = await request(app)
      .post('/foods')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Banana', category: 'Fruta', calories: 89 });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});
