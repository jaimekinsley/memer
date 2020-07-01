const { prepare } = require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');
const Meme = require('../lib/models/Meme');

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

  it('gets all memes with GET', async() => {
    const memes = prepare(await Meme.find());

    return await request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(memes);
      });
  });

  it('gets a meme by id with GET', async() => {
    const meme = prepare(await Meme.findOne());

    return await request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });

  it('updates a meme with PUT', async() => {
    const meme = prepare(await Meme.findOne());

    return await request(app)
      .put(`/api/v1/memes/${meme._id}`)
      .send({
        top: 'shut up and',
        image: 'https://i.kym-cdn.com/entries/icons/original/000/005/574/takemymoney.jpg',
        bottom: 'take my money!',
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

  it('deletes a meme by id with DELETE', async() => {
    const meme = prepare(await Meme.findOne());

    return await request(app)
      .delete(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });
});
