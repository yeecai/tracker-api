import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,                // strips unknown props
    forbidNonWhitelisted: true,     // throws if unknown props sent
    transform: true                 // auto-transform payloads to DTO classes
  }));
  await app.listen(3000);
}
bootstrap();
