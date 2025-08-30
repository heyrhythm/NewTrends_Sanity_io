import { defineField, defineType } from "sanity";

export const ProductSchema = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name:'name',
            title: 'Name of Product',
            type: 'string',
        }),
        defineField({
            name:'image',
            title: 'Product Image',
            type:'array',
            of: [{type: 'image'}],
        }),
        defineField({
            name:'description',
            title: 'Product Description',
            type: 'text',
        }),
        defineField({
            name:'slug',
            title: 'Product Slug',
            type: 'slug',
            options: {
                source: 'name'
             } // Automatically generate slug from the name field
        }),
        defineField({
            name: 'price',
            title: 'Product Price',
            type: 'number',
        }),
        defineField({
            name:'price_id',
            title:'stripe Price ID',
            type:'string',
        }),
        defineField({
            name: 'category',
            title: 'Product Category',
            type: 'reference',
            to: [{type:'category'}], // Reference to the category document
        }),


    ]
});