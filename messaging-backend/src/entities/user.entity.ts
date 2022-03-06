import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Message } from './message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imageUrl: string;

  @OneToMany(() => Message, (msg) => msg.user)
  messages: Message[];
}
