import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Auth } from './auth/entities/auth.entity';
import { APP_GUARD } from '@nestjs/core';
import { jwtAuthGuard } from './auth/jwt.guard';
import { PlansModule } from './plans/plans.module';
import { RecordsModule } from './records/records.module';
import { Plan } from './plans/entities/plan.entity';
import { Record } from './records/entities/record.entity';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),  
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Auth, Plan, Record],
      synchronize: true,
    }),
    AuthModule,
    PlansModule,
    RecordsModule,
  ], controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: jwtAuthGuard,
    },
  ]
})
export class AppModule {
}
