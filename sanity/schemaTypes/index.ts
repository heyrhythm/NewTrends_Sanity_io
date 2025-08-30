import { type SchemaTypeDefinition } from 'sanity'
import { ProductSchema } from './product'
import { ProductCategorySchema } from './category'
import { HeroImagesSchema } from './heroImages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductSchema, ProductCategorySchema, HeroImagesSchema],
}
