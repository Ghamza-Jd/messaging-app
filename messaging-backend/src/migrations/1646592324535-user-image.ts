import {MigrationInterface, QueryRunner} from "typeorm";

export class userImage1646592324535 implements MigrationInterface {
    name = 'userImage1646592324535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`imageUrl\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`imageUrl\``);
    }

}
