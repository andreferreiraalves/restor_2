import "dotenv/config";
import fastfy from "fastify";
import cors from "@fastify/cors";

import test_router from "./routers/test_router";
import files_router from "./routers/files_router";

const { API_ADDRESS = "localhost" } = process.env;
const API_PORT = 8080;

const app = fastfy();

app.register(cors, {
  allowedHeaders: "*",
  origin: "*",
});

app.register(files_router);
app.register(test_router);

const start = async () => {
  try {
    await app.listen({ host: API_ADDRESS, port: API_PORT });
    console.log(`Server running on port ${API_PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
