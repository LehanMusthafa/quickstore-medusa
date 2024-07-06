import { Column, Entity, OneToMany } from "typeorm";
import { Product as MedusaProduct } from "@medusajs/medusa";
import { Review } from "./review";

@Entity()
export class Product extends MedusaProduct {
  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];

  @Column({ type: "varchar"})
  description_title: string;

  @Column({ type: "varchar", array: true })
  top_features: string[];

  @Column({ type: "varchar"})
  features_details: string;

  @Column({ type: "varchar"})
  ingredients_title: string;

  @Column({ type: "varchar", array: true })
  main_ingredients: string[];

  @Column({ type: "varchar"})
  all_ingredients: string;
}
