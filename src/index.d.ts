import { Review } from "./models/review";

export declare module "@medusajs/medusa/dist/models/customer" {
  declare interface Customer {
    reviews: Review[];
  }
}

export declare module "@medusajs/medusa/dist/models/product" {
  declare interface Product {
    reviews: Review[];
    description_title: string;
    top_features: string[];
    features_details: string;
    ingredients_title: string;
    main_ingredients: string[];
    all_ingredients: string;
  }
}
