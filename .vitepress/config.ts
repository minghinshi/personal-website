import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "minghinshi's Resources",
  description: "Blog by minghinshi",
  base: "/personal-website/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "Posts",
        items: [{ text: "Hello, World!", link: "/posts/hello-world" }],
      },
    ],
  },
});
