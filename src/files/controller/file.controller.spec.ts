import { Test, TestingModule } from '@nestjs/testing';
import { FileController } from './file.controller';
import { fileOptions } from '../config/file-config';
import { FileService } from '../service/file.service';
import { request } from 'http';

describe('Files Controller', () => {
  let fileController: FileController;
  let fileService: FileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileController],
      providers: [FileService],
    }).compile();

    fileController = module.get<FileController>(FileController);
    fileService = module.get<FileService>(FileService);
  });

  it('should be defined', () => {
    expect(fileController).toBeDefined();
    expect(fileService).toBeDefined();
  });

  describe('uploadFile', () => {

    it(`maximum file size should be: ${fileOptions.limits.fileSize}`, () => {
      // mock file

      // send file to endpoint
      // expect exception too big
      // expect 200 ok if under limit

    });
  });

});

// function createRequest(endpoint: string, expect: any) {
// }

// quotes: single & double quote, --> "Tuvalu, world" |'Tuvalu, world' will be split into 2 fields
// escaping: / or """
// encoding: utf8/16 or...
// etc...
// filesize
// filetype/extension
// correct directory --> amount of files before, amount of files after
// filename
//

// error handling
