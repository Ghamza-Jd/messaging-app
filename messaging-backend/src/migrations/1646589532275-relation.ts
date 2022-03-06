import { MigrationInterface, QueryRunner } from 'typeorm';

export class relation1646589532275 implements MigrationInterface {
  name = 'relation1646589532275';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`message\` ADD \`userId\` int NULL`);
    await queryRunner.query(
      `ALTER TABLE \`message\` ADD CONSTRAINT \`FK_446251f8ceb2132af01b68eb593\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`message\` DROP FOREIGN KEY \`FK_446251f8ceb2132af01b68eb593\``,
    );
    await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN \`userId\``);
  }
}
