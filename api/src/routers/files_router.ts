import { FastifyInstance } from "fastify";

export default async function files_router(app: FastifyInstance) {
  // app.post('/api/message', async (request, reply) => {
  //       const schema = z.object({
  //           message: z.string().min(3)
  //       })
  //       const { message } = schema.parse(request.body);
  //
  //       const objectStore = {
  //           message
  //       }
  //
  //       const key = randomUUID()
  //
  //       try {
  //           await redis.set(key.toString(), JSON.stringify(objectStore))
  //       } catch (err) {
  //           console.log(err)
  //           return reply.status(500).send(err)
  //       }
  //
  //       return reply.status(201).send({
  //           key,
  //           message,
  //       })
  //   })
}
