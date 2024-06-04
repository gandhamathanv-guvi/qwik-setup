import { type RequestHandler } from '@builder.io/qwik-city';
export const onGet: RequestHandler = async (req) => {
  
    const sitemapXml = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">qwik pages </urlset>'
  
    const response2 = new Response(sitemapXml, {
      status: 200,
      headers: {
        'Content-Type': 'text/xml',
      },
    });
    req.send(response2);
  };
  