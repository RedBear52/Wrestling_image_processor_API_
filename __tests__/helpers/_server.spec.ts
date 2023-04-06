import supertest from 'supertest'
import app from '../../server'

const request = supertest(app)

describe('Test endpoint response', () => {
    it('Gets the api endpoint', async () => {
        const response = await request.get('/api')
        expect(response.status).toBe(200)
    })
})
