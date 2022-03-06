import { Router } from 'express';

export const messageRouter = (router: Router) => {
  router.get('/', (_req, res) => {
    res.send({ message: 'get messages' });
  });

  return router;
};
