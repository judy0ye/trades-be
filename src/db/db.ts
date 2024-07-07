import { Pool } from "pg";
import 'dotenv/config'

const pool = new Pool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: 'stocks',
  password: process.env.PASSWORD,
  port: parseInt(process.env.DBPORT)
});

export default pool;