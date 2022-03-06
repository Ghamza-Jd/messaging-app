import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';

import ormconfig from './ormconfig';

let connection: Connection | undefined = undefined;

const initConnection = async () => {
  connection = await createConnection(ormconfig);
};

const getConnection = () => {
  if (connection == undefined) {
  } else {
    return connection;
  }
};

export { initConnection, getConnection };
