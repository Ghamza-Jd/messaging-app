import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';

import { logger } from '&utils/logger';

import ormconfig from './ormconfig';

let connection: Connection | undefined = undefined;

export const initConnection = async () => {
  try {
    connection = await createConnection(ormconfig);
    logger.info('Connected to database.');
  } catch (error) {
    logger.error(error);
  }
};

export const getConnection = (): Connection | undefined => {
  return connection;
};
