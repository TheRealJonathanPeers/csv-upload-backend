import { Test, TestingModule } from '@nestjs/testing';
import { FilesController } from './files.controller';

describe('Files Controller', () => {
  let controller: FilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilesController],
    }).compile();

    controller = module.get<FilesController>(FilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

// quotes, escaping, encoding, etc...
// filesize
// filetype/extension
// correct directory --> amount of files before, amount of files after
// filename

// error handling
