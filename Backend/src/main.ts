import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.set('trust proxy', 1); // Trust the first proxy

  app.enableCors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:4000',
    credentials: true,
  });

  app.use(
    cookieParser(),
    session({
      secret: process.env.SESSION_SECRET || 'Hello-World',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      },
    }),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
