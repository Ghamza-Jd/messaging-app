import { Router, urlencoded, json } from 'express';
import CORS from 'cors';

export const defaultRouter = () => {
  const router = Router({ mergeParams: true });

  router.use(CORS());
  router.use(urlencoded({ extended: true }));
  router.use(json());

  return router;
};
