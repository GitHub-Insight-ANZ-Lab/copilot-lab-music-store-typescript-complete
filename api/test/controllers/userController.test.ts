import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';

chai.use(chaiHttp);
const { expect } = chai;

describe('UserController', () => {
    describe('GET /users', () => {
        it('should return all users', async () => {
            const res = await chai.request(app).get('/users');
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
        });
    });

    describe('POST /users', () => {
        it('should create a new user', async () => {
            const res = await chai.request(app).post('/users').send({});
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
        });
    });
});