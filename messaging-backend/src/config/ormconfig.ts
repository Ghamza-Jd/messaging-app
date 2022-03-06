import { ConnectionOptions } from 'typeorm';

const { env } = process;

const ormconfig: ConnectionOptions = {
  host: env.DB_HOST,
  type: 'mysql',
  port: parseInt(env.DB_PORT || '3307'),
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: ['src/entities/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
  synchronize: false,
};

export default ormconfig;
