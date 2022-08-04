import blog from "./images/blog.png";
import meme from "./images/meme.png";
import product from "./images/product-page.png";

export default [
  {
    id: 1,
    card_title: "My Blog",
    card_desc: "This is my blog and I love it ",
    what_use: ["react", "material-ui", "scss"],
    source_code: "https://github.com/homoki-denis/my-blog",
    live_demo: "https://my-blog-iota-seven.vercel.app/",
    img_card: blog,
  },
  {
    id: 2,
    card_title: "Meme Generator",
    card_desc: "Something fun I found out, and tried to build it myself",
    what_use: ["react", "scss"],
    source_code: "https://github.com/homoki-denis/meme-generator",
    live_demo: "https://meme-generator-orpin.vercel.app/",
    img_card: meme,
  },
  {
    id: 3,
    card_title: "Product Landing Page",
    card_desc: "One of my first projects",
    what_use: ["html", "css"],
    source_code: "https://github.com/homoki-denis/Product-Landing-Page",
    live_demo: "https://product-landing-page-weld.vercel.app/",
    img_card: product,
  },
];
