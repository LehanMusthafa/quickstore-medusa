import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductUpdate1720298230596 implements MigrationInterface {
  name = "ProductUpdate1720298230596";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ADD "description_title" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD "top_features" character varying array NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD "features_details" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD "ingredients_title" character varying NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD "main_ingredients" character varying array NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD "all_ingredients" character varying NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" DROP COLUMN "all_ingredients"`
    );
    await queryRunner.query(
      `ALTER TABLE "product" DROP COLUMN "main_ingredients"`
    );
    await queryRunner.query(
      `ALTER TABLE "product" DROP COLUMN "ingredients_title"`
    );
    await queryRunner.query(
      `ALTER TABLE "product" DROP COLUMN "features_details"`
    );
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "top_features"`);
    await queryRunner.query(
      `ALTER TABLE "product" DROP COLUMN "description_title"`
    );
  }
}
