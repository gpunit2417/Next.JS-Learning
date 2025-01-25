## What is Next.Js?

1. Next.js is a popular React framework that extends React’s capabilities by providing powerful tools for      server-side rendering, static site generation, and full-stack development. It is widely used to build SEO-friendly, high-performance web applications easily.
2. Built on React for easy development of front-end applications.
3. Provides server-side rendering (SSR) and static site generation (SSG).
4. It comes with built-in CSS and JavaScript bundling for performance.
5. Highly scalable and SEO-friendly for modern web applications.


## Why learn Next.js?
## Next.js offers several advantages over traditional React development:

1. Built-in Routing and SSR: Unlike React, which lacks native routing, Next.js provides seamless routing functionality out of the box. Additionally, it supports server-side rendering, improving performance and SEO.

2. Faster Development: Next.js accelerates development by offering built-in features and conventions. Developers can focus on building features rather than configuring complex setups.

3. SEO Optimization: Next.js enhances SEO by addressing slow rendering and loading times associated with client-side rendering. Its SSR capabilities ensure that search engines can efficiently crawl and index your content.


## How NextJS Application works

1. Server Starts
- *When you run npm run dev, the Next.js development server starts.*
- *Next.js reads the pages folder and sets up routes based on the file structure.*

2. index.js and Routing
- File-based Routing:
- The pages/index.js file maps to the root route /.
- For example, visiting http://localhost:3000 loads the content of index.js.

3. _app.js - Global Customization
- Before rendering any page (e.g., index.js), Next.js processes _app.js.
- Purpose of _app.js:
- Wraps the page component with global elements like layout or context providers.
- Injects global CSS (if imported).
- The default _app.js looks like this:
javascript
Copy
Edit
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
- Component refers to the page being rendered (index.js for /).
- pageProps contains props passed during rendering.

4. _document.js - Customizing HTML Document
- Before rendering any page, Next.js uses _document.js to set up the HTML template for all pages.
- Purpose of _document.js:
- Add metadata, external scripts, or styles to the <head>.
- Customize <html> and <body> tags.
- Example _document.js:
javascript
Copy
Edit
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="/custom.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
- Main: Represents the rendered page content.
- NextScript: Loads Next.js scripts for interactivity.
5. Rendering the Page (index.js)
- Once _app.js and _document.js are processed:
- Next.js renders the index.js component (or any page based on the route).
- For example, the default index.js might look like:
javascript
Copy
Edit
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  );
}
- This component's content is displayed in the browser.

6. Navigating Between Pages
- Using Link for Navigation:

- Navigation between pages is achieved using the Link component from next/link.
- Example:
javascript
Copy
Edit
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
- Clicking the link navigates to /about and loads pages/about.js.
- Client-side Navigation:

- Next.js prefetches data for linked pages (in production).
- This makes transitions between pages fast.

7. API Requests (api folder)
- If the application includes API routes in pages/api/, those routes can be accessed by the frontend or external systems.
- For example:
- pages/api/hello.js:
javascript
Copy
Edit
export default function handler(req, res) {
  res.status(200).json({ message: "Hello World" });
}
- Visiting /api/hello responds with JSON: { "message": "Hello World" }.

## Summary of Flow
- Start with _app.js → applies global logic.
- Pass through _document.js → customizes the HTML structure.
- Render the page component (index.js for /).
- Use Link for navigation between pages.
- Use API routes (if defined) for backend logic.
- This process ensures modular, efficient, and SEO-friendly navigation.


## File-based Routing

**This can be achieved in two ways: -**
1. In the pages folder, we can create multiple files like blog.js, contact.js, etc. and in the base router localhost:3000, just add /filename and the router will work.

2. In this method, we can create folders like blog, contact, etc. and a file named index.js(no any other name) in these folders. In the base router localhost:3000, just add /filename and the router will work.