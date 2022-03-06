import { ConnectionOptions } from 'typeorm';

const { env } = process;

export const ormconfig: ConnectionOptions = {
  host: env.DB_HOST,
  type: 'mysql',
  port: parseInt(env.DB_PORT || '3306'),
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: ['src/entites/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: false,
};
