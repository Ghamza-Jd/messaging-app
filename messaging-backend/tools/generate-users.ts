import { faker } from '@faker-js/faker';

import { initConnection, getConnection, closeConnection } from '&config/db';
import { User } from '&/src/entities/user.entity';

const generateUsers = async () => {
  await initConnection();
  const users: User[] = [];

  for (let i = 0; i < 100; i++) {
    const user = new User();
    user.name = faker.name.findName();
    user.imageUrl = `https://robohash.org/${user.name.split(' ')[0]}`;
    users.push(user);
  }

  await getConnection()
    ?.createQueryBuilder()
    .insert()
    .into(User)
    .values(users)
    .execute();

  closeConnection();
};

generateUsers();
