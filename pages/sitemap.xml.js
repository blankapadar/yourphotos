const EXTERNAL_URL = "https://yourphotos-gamma-vercel.app/users";
const USER_API_URL = "https://jsonplaceholder.typicode.com/users";

function generateSiteMap(users) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourphotos-gamma-vercel.app</loc>
     </url>
     ${users
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const request = await fetch(USER_API_URL);
  const users = await request.json();

  const sitemap = generateSiteMap(users);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
