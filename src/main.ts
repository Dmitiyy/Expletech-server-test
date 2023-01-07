import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

dotenv.config({ path: '.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(bodyParser.json({ limit: '50mb' }));
  await app.listen(process.env.PORT);
}
bootstrap();
