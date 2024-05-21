import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1715153515650 implements MigrationInterface {
  name = 'SeedDb1715153515650';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES('America'),('Rassia'),('China')`,
    );
    await queryRunner.query(
      `INSERT INTO users (username,email,password) VALUES('Karl','Karl@gmail.com','$2b$10$.jOHwdb/kWaN7s2fVRLuWOEcUzlRfYwHuqxdKTTjZgLeFO2rRPECq')`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(): Promise<void> {}
}
