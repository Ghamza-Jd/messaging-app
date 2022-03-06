import { Message } from '&/src/entities/message.entity';
import { Router } from 'express';
import { getConnection } from 'typeorm';

export const messageRouter = (router: Router) => {
  router.get('/', (_req, res) => {
    res.send({ message: 'get messages' });
  });

  router.post('/', (_req, res) => {
    const message = new Message();
    message.content = 'Hello World';
    const repo = getConnection().getRepository(Message);
    repo.save(message);
    res.send({ message: 'message saved' });
  });

  return router;
};
