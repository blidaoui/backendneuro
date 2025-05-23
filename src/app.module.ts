import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { User } from './user.entity';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'blidaoui',
      database: 'NeuroConsulting',
      entities: [User],
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'blidaouiibtihel22@gmail.com',
          pass: 'nfmofxkvmqmbdlcb',
        },
      },
      defaults: {
        from: ' <blidaouiibtihel22@gmail.com>',
      },
    }),
    UsersModule,
  EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
