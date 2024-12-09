import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { BookingsModule } from './bookings/bookings.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PaymentModule } from './payment/payment.module';
import { ProfileModule } from './profile/profile.module';
import { SearchModule } from './search/search.module';
import { SlotsModule } from './Slots/slots.module';
import { SportsModule } from './sports/sports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
<<<<<<< HEAD
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tiger',
      database: 'office_of_sports_online',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      exclude: ['/admin*'],
    }),
    AdminModule,
    AuthModule,
    BookingsModule,
    FeedbacksModule,
    NotificationsModule,
    PaymentModule,
    ProfileModule,
    SearchModule,
    SlotsModule,
    SportsModule,
  ],
  controllers: [
    AppController,
    AdminController,
    AuthController,
    BookingsController,
    FeedbacksController,
    NotificationsController,
    PaymentController,
    ProfileController,
    SearchController,
    SlotsController,
    SportsController,
  ],
=======
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'emamul',
    database:'office_of_sports_online',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
    AdminModule, AuthModule, BookingsModule, FeedbacksModule, NotificationsModule, PaymentModule, ProfileModule, SearchModule, SlotsModule, SportsModule],
  controllers: [AppController],
>>>>>>> bbc26cf4b96485774976d3386956fc3da21fd980
  providers: [AppService],
})
export class AppModule {}