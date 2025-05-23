import { User } from '../user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(data: any): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
}
