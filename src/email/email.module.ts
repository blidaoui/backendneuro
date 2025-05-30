import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: 'ssl0.ovh.net',
          port: 465,
          secure: true,
          auth: {
            user: configService.get<string>('EmailUser'),
            pass: configService.get<string>('EmailPassword'),
          },
        },
        defaults: {
          from: '"NeuroFlow" <contact@neuroflow.com>',
        },
      }),
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
