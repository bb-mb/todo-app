import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  console.log('123');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
