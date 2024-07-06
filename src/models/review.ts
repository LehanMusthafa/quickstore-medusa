import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { BaseEntity } from "@medusajs/medusa";
import { generateEntityId } from "@medusajs/medusa/dist/utils";
import { Customer, Product } from "@medusajs/medusa";

@Entity()
export class Review extends BaseEntity {
  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  bottom_line: string;

  @Column()
  rating: number;

  @Column({ type: "varchar" })
  customer_id: string;

  @Column({ type: "varchar" })
  product_id: string;

  @Column({ type: "varchar" })
  skin_type: string;

  @Column({ type: "varchar" })
  skin_shade: string;

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = generateEntityId(this.id, "review");
  }

  @ManyToOne(() => Customer, (customer) => customer.reviews)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @ManyToOne(() => Product, (product) => product.reviews)
  @JoinColumn({ name: "product_id" })
  product: Product;
}
