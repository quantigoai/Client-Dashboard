import { ProjectEntryEntity } from 'src/projects/model/project-entry.entity';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './user.interface';


@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({type: 'enum', enum: UserRole, default: UserRole.CLIENT})
  role: UserRole;

  @Column()
  password: string;

  @OneToMany(type => ProjectEntryEntity, projectEntryEntity => projectEntryEntity.client)
  projectEntries: ProjectEntryEntity[];

  @BeforeInsert()
  emailTolowerCase() {
    this.email = this.email.toLowerCase();
  }
}
