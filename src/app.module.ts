import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessageModule } from './message/message.module';



@Module({
  imports: [DatabaseModule, UserModule, AuthModule, ConversationModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}