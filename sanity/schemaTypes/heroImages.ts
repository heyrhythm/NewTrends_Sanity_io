import { defineField,defineType } from "sanity";

export const HeroImagesSchema = defineType({
    name:"heroImages",
    title: "Hero Images",
    type: "document",
    fields: [
        defineField({
            name: 'heroImage1',
            title: 'Hero Image 1',
            type: 'image'
        }),
        defineField({
            name: 'heroImage2',
            title: 'Hero Image 2',
            type: 'image'})
        ]
})