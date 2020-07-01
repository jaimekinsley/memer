require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

describe('meme routes', () => {
  it('creates a meme with POST', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'shut up and',
        image: 'https://i.kym-cdn.com/entries/icons/original/000/005/574/takemymoney.jpg',
        bottom: 'take my money!'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          top: 'shut up and',
          image: 'https://i.kym-cdn.com/entries/icons/original/000/005/574/takemymoney.jpg',
          bottom: 'take my money!',
          __v:0
        });
      });
  });
});
