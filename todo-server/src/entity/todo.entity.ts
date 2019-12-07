import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn } 
  from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  completed: boolean;

  @Column()
  todoDate: Date;

  @Column()
  createdDate: Date;
}