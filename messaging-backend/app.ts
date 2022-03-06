import Express from 'express';
import { config } from 'dotenv';

import { appRoutes } from '&/src/app.routes';
import { defaultStrategy } from '&/src/middlewares/error/strategies';
import { handler as errorHandler } from '&/src/utils/handler';
import { logger } from '&/src/utils/logger';

config();

const app = Express();
const appErrorHandler = errorHandler([defaultStrategy]);
const port: number = parseInt(process.env.PORT || '5001');

app.disable('x-powered-by');

appRoutes(app);
appErrorHandler(app);

const server = app.listen(port, () => {
  logger.info(`Server running on port: ${port}`);
});

export { server };
