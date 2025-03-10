import { FastifyInstance } from "fastify";

export default async function test_router(app: FastifyInstance) {
  app.get("/api", async (request, reply) => {
    return reply.status(200).send({
      message: "Server running",
    });
  });
}
