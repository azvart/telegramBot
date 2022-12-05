import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public telegram_id: string;

  @Column()
  public first_name: string;

  @Column()
  public last_name: string;

  @Column()
  public username: string;

  @Column()
  public language_code: string;

  @Column()
  public is_bot: boolean;
}
