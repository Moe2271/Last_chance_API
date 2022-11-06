import supertest from 'supertest';
import app from '../main';
import resize from '../utils/sharp';

import validate from '../middlewares/validate';
const request = supertest(app);

describe('Test endpoint responses', () => {
  it('path correctness', async () => {
    const endpoint = '/fjord/250/250';
    const response = await request.get(endpoint);
    expect(response.status).toBe(200);
  });
  it('sharp file testing', async () => {
    const response: boolean = resize('fjord.jpg', 230, 100);
    expect(response).toBe(true);
  });
  it('Input Validation', () => {
    const response: boolean = validate.exists('fjord.jpg', 700, 700);
    expect(response).toBe(false);
  });
});
