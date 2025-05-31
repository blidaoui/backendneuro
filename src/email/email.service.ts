import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(name: string,last_name: string, email: string,number_phone: string, message: string) {
    await this.mailerService.sendMail({
      to: 'blidaouiibtihel22@gmail.com',
      subject: `new message from ${name}`,
      text: `name: ${name}\n lastName: ${last_name}\n email: ${email}\n number_phone: ${number_phone}\n  message:\n${message}`,
    });
  }
}