import { neon } from '@neondatabase/serverless';
export function db(){if(!process.env.DATABASE_URL) throw new Error('DATABASE_URL non configurée');return neon(process.env.DATABASE_URL)}
export const response=(statusCode,body)=>({statusCode,headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Content-Type, Authorization','Access-Control-Allow-Methods':'GET,POST,PUT,DELETE,OPTIONS'},body:JSON.stringify(body)});
