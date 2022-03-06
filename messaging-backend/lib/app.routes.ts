import { Express } from 'express';

import { defaultRouter } from '&routers/default';
import { healthRouter } from '&modules/health/health.route';
import { messageRouter } from './modules/message/message.route';

export const appRoutes = (app: Express) => {
  app.use('/health', healthRouter(defaultRouter()));
  app.use('/message', messageRouter(defaultRouter()));
};
