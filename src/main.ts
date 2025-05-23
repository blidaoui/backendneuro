import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('neuroBackend')
  app.enableCors({
     origin: 'http://localhost:3000', // Adresse du frontend
    credentials:true},
  )

  await app.listen(8000);
}
bootstrap();
