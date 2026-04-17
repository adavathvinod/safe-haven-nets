import type { APIRoute } from "astro";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/seo";

const staticRoutes = ["/", "/about", "/contact", "/services"];
const serviceRoutes = services.map((service) => `/services/${service.slug}`);
const urls = [...staticRoutes, ...serviceRoutes];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${new URL(url, SITE_URL).toString()}</loc>
</url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
