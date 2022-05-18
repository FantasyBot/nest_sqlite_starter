import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(body: CreateUserDto): Promise<import("./user.entity").User>;
    getUser(id: string): Promise<import("./user.entity").User>;
    findAllUsers(email: string): Promise<import("./user.entity").User[]>;
    removeUser(id: string): Promise<void>;
    updateUser(id: string, body: UpdateUserDto): Promise<import("./user.entity").User>;
}