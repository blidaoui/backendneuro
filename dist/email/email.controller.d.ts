import { EmailService } from './email.service';
export declare class EmailController {
    private emailService;
    constructor(emailService: EmailService);
    sendEmail(body: {
        name: string;
        last_name: string;
        email: string;
        number_phone: string;
        message: string;
    }): Promise<{
        success: boolean;
    }>;
}
