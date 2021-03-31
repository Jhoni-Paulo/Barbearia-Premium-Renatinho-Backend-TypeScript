import { request, response, Router } from 'express'
import AuthenticateUserService from '../services/AuthenticateUserService'

const sessionsRouter = Router()

sessionsRouter.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body

    await new AuthenticateUserService().execute({ email, password })

        return response.json( {ok: true} );
    } catch (err) {
        return response.status(400).json({ error : err.message })
    }
})

export default sessionsRouter