import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 ,default:'' })
  name: string;

  @Column({ default:'' })
  last_name: string;

  @Column({  })
  email: string;

  @Column({  })
  number_phone: string;

  @Column({ default:'' })
  message: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}