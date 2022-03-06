import { NextFunction, Response, Request } from 'express';

export const defaultStrategy = (
  err: any,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    next(err);
  }

  res.status(err.status ?? 500);
  res.set('Content-Type', 'application/json');
  res.send({ status: err.status, message: err.message });
  next(err);
};
