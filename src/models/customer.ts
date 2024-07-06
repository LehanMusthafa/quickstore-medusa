import { Entity, OneToMany } from "typeorm";
import {
  Customer as MedusaCustomer,
} from "@medusajs/medusa";
import { Review } from "./review";

@Entity()
export class User extends MedusaCustomer {
  @OneToMany(() => Review, (review) => review.customer)
  reviews: Review[];
}
