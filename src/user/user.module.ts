// users.module.ts
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { Module } from '@nestjs/common';
import { User } from '../user.entity';
import { UsersController } from './user.controller'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UsersController], 
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
