import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  collaborator: string;

  @Column()
  photo_name: string;

  @Column()
  photo_location: string;

  @Column()
  register_date: string;

  @Column()
  photo: string;

  @Column()
  signature: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
