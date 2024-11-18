import { FastifyReply, FastifyRequest } from 'fastify'

export class MainRoutesController {
  hello(_request: FastifyRequest, reply: FastifyReply) {
    return reply.send('Hello World route!')
  }
}

export class AuthenticationRoutesController {
  async signIn(request: FastifyRequest, reply: FastifyReply) {
    return reply.send('Hello World route!')
  }

  async signUp(request: FastifyRequest, reply: FastifyReply) {
    return reply.send('Hello World route!')
  }

  async signOut(request: FastifyRequest, reply: FastifyReply) {
    return reply.send('Hello World route!')
  }
}
