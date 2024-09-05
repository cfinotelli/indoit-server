import { FastifyReply, FastifyRequest } from 'fastify'

export class MainRoutesController {
  hello(_request: FastifyRequest, reply: FastifyReply) {
    return reply.send('Hello World route!')
  }
}
