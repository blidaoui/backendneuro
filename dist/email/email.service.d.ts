import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendMail(name: string, last_name: string, email: string, number_phone: string, message: string): Promise<void>;
}
