import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesController } from './files/controller/files.controller';
import { FileService } from './files/service/file.service';

@Module({
  imports: [],
  controllers: [AppController, FilesController],
  providers: [AppService, FileService],
})
export class AppModule {}
