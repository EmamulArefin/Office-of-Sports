import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './User/auth/auth.module';
import { BookingsModule } from './bookings/bookings.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PaymentModule } from './payment/payment.module';
import { ProfileModule } from './profile/profile.module';
import { SearchModule } from './search/search.module';
import { SlotsModule } from './Slots/slots.module';
import { SportsModule } from './sports/sports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './User/user.module';
import { HistoryModule } from './history/history.module';

// Remove the incorrect import of `Student_RegiRepository`
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
<<<<<<< HEAD
      password: 'tiger',
=======
      password: 'emamul',
>>>>>>> 51714fc0ba166e5f25519c94b416b40577fddf3d
      database: 'office_of_sports_online',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AdminModule,
    AuthModule,
    BookingsModule, // Make sure BookingsModule is correctly imported
    FeedbacksModule,
    NotificationsModule,
    PaymentModule,
    ProfileModule,
    SearchModule,
    SlotsModule,
    SportsModule,
    UserModule,
    HistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
