import { MigrationInterface, QueryRunner } from "typeorm";

export class ReviewCreate1720297409649 implements MigrationInterface {
  name = "ReviewCreate1720297409649";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "review" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "title" character varying NOT NULL, "description" character varying NOT NULL, "bottom_line" character varying NOT NULL, "rating" integer NOT NULL, "customer_id" character varying NOT NULL, "product_id" character varying NOT NULL, "skin_type" character varying NOT NULL, "skin_shade" character varying NOT NULL, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "FK_957d0d10b33ce8de57a0a01e483" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "FK_26b533e15b5f2334c96339a1f08" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "FK_26b533e15b5f2334c96339a1f08"`
    );
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "FK_957d0d10b33ce8de57a0a01e483"`
    );
    await queryRunner.query(`DROP TABLE "review"`);
  }
}
