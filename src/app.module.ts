import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracksController } from './modules/tracks/tracks.controller';
import { TracksService } from './modules/tracks/tracks.service';
import { TracksModule } from './modules/tracks/tracks.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [TracksModule, UsersModule],
  controllers: [AppController, TracksController],
  providers: [AppService, TracksService],
})
export class AppModule {}
