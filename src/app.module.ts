import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    DatabaseModule,
    TelegramModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
