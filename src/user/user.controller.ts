// users.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from '../user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('ajouterdemande')
  ajouterdemande( 
    @Body('name') name: string,
  @Body('last_name') last_name: string,
  @Body('number_phone') number_phone: number,
  @Body('email') email: string,
  @Body('message') message: string,): Promise<User> {
    return this.usersService.create({
        name,
        last_name,
        number_phone,
        email,
        message,
        createdAt: new Date(),
      });
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
