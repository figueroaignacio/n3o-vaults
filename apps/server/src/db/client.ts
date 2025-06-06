// DB
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

// Config
import { config } from '../config';

const pool = new Pool({
  host: config.database.host,
  port: Number(config.database.port),
  user: config.database.user,
  password: config.database.password,
  database: config.database.name,
});

export const db = drizzle(pool);
