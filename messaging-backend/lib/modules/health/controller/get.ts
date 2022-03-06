import { Request, Response } from 'express';

import { logger } from '&utils/logger';
import { makeError } from '&utils/makeError';

import { getHealthService } from '../service/get';

export const getHealth = async (_req: Request, res: Response) => {
  try {
    logger.info('Checking the ms health');
    const result = getHealthService();
    logger.info(`The ms health is ${result.status}`);

    res.statusCode = 200;
    res.send(result);
  } catch (error) {
    logger.error(error);
    res.statusCode = 500;
    res.send(makeError());
  }
};
