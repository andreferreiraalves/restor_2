import { sql } from "./lib/postgres";

async function setup() {
  await sql/*sql*/ `
    CREATE TABLE IF NOT EXISTS xxxx (
      id SERIAL PRIMARY KEY
    )`;

  await sql/*sql*/ `
    CREATE TABLE IF NOT EXISTS yyyy (
      id SERIAL PRIMARY KEY
  )`;

  await sql.end();

  console.log("setup one");
}

setup();
