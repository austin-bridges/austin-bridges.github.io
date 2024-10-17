import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1kw687w_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&amp;family=Roboto+Slab:wght@900&amp;family=Roboto:wght@400&amp;display=swap" rel="stylesheet"><!-- HEAD_svelte-1kw687w_END -->`, ""}  ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
