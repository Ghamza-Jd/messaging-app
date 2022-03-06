import { Router } from 'express';
import partial from 'lodash/partial';

import { getHealth } from './controller';

export const healthRouter = (router: Router) => {
  router.get('/200', partial(getHealth));

  return router;
};
