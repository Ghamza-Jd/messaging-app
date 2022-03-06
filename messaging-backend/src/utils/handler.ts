import { Express } from 'express';

const handler = (errorList: any) => {
  const errorHandler = (app: Express) => {
    Object.keys(errorList).forEach((key) => {
      if ({}.hasOwnProperty.call(errorList, key)) {
        app.use(errorList[key]);
      }
    });
    return app;
  };
  return errorHandler;
};

export { handler };
