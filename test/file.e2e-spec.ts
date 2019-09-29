import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { fileResult } from './results/e2e-file-results';

describe('FileController (e2e)', () => {
  let app;
  const dir = 'test/assets';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/file/upload (POST)', () => {
    return request(app.getHttpServer())
      .post('/file/upload')
      .attach('file', `${dir}/utf8.csv`)
      .expect(fileResult.encodingResult)
      .expect(201);
  });

  it('/file (GET)', () => {
    return request(app.getHttpServer())
      .get('/file')
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
