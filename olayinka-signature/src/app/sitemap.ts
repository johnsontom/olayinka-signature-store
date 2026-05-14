import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://olayinka-signature-store.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://olayinka-signature-store.vercel.app/collection",
      lastModified: new Date(),
    },
  ]
}