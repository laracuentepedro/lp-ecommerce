import { z } from "zod";

//Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 character"),
  slug: z.string().min(3, "Slug must be at least 3 character"),
  category: z.string().min(3, "Category must be at least 3 character"),
  brand: z.string().min(3, "Brand must be at least 3 character"),
  description: z.string().min(3, "Description must be at least 3 character"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, 'Product must have at least 1 image'),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
});