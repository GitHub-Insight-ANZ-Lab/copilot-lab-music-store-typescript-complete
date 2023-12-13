import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';

chai.use(chaiHttp);
const { expect } = chai;

describe('MusicStoreController', () => {
  describe('GET /genres', () => {
    it('should return all genres', async () => {
      const res = await chai.request(app).get('/genres');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
    });
  });

  describe('GET /albums/genre/{genreName}', () => {
    it('should return albums by genre name', async () => {
      const genreName = 'rock'; // replace with an actual genre name
      const res = await chai.request(app).get(`/albums/genre/${genreName}`);
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
    });
  });

  describe('GET /albums/{id}', () => {
    it('should return album by ID', async () => {
      const id = 1; // replace with an actual album id
      const res = await chai.request(app).get(`/albums/${id}`);
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
    });

    it('should return 404 if album not found', async () => {
      const id = 9999; // replace with an id that doesn't exist
      const res = await chai.request(app).get(`/albums/${id}`);
      expect(res.status).to.equal(404);
    });
  });
});