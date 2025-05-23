import { UsersService } from './user.service';
import { User } from '../user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    ajouterdemande(name: string, last_name: string, number_phone: number, email: string, message: string): Promise<User>;
    findAll(): Promise<User[]>;
}
