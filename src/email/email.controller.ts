// email.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('send')
  async sendEmail(
    @Body() body: { name: string; last_name: string; email: string; number_phone: string; message: string },
  ) {
    await this.emailService.sendMail(body.name, body.last_name, body.email, body.number_phone, body.message);
    return { success: true };
  }
}
