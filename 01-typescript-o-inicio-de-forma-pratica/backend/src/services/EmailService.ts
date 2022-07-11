// Declarar do tipo objeto
interface IMailTo {
    name: string,
    email: string
}

interface IMailMessage {
    subject: string,
    body: string,
    attachment?: string[]; // Array de String Opcional 
}

// Data Transfer Object (Metodologia DDD)
interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage
}

// Interface para a classe seguir um modelo
interface IEmailService {
    // Método sendmail que recebe um request do tipo IIMessageDTO
    sendMail(request: IMessageDTO): void
}


class EmailService implements IEmailService {
    // Desestruturação dos parametros
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService