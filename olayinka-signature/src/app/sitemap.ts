import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://olayinkasignature.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://olayinkasignature.vercel.app/collection",
      lastModified: new Date(),
    },
  ]
}