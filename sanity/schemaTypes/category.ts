import { defineField, defineType } from "sanity";

export const ProductCategorySchema = defineType({
    name:'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Category Name',
            type: 'string'
        }),
        defineField({
            name: "slug",
            type: "slug",
  options: {
    source: "name",
    slugify: input =>
      input.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")
        }})
    ]
})