import { c as create_ssr_component, e as escape, b as add_attribute } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let answer = "";
  let message = "";
  return `${$$result.head += `<!-- HEAD_svelte-1jn4ga_START --><style data-svelte-h="svelte-1no1r1b">body { background-color:#f5f5f5; }</style><!-- HEAD_svelte-1jn4ga_END -->`, ""} <h1 class="text-9xl font-bold font-fatface" data-svelte-h="svelte-9dc92v">Austin Bridges</h1> <p></p> <p class="text-7xl" data-svelte-h="svelte-196p3s9">Recordings on <a href="https://soundcloud.com/austin-bridges-133422285/tracks" class="underline hover:text-sky-400">Soundcloud</a>.</p>  <p class="text-7xl" data-svelte-h="svelte-130yvpm">Web Developer</p> ${`<p>${escape(message)}</p> <form><span class="text-lg" data-svelte-h="svelte-b5o54f">Enter your passcode here:</span> <input class="border border-sky-400 py-1"${add_attribute("value", answer)}> <button ${"disabled"} type="submit" class="px-2 py-1 bg-sky-200 hover:bg-sky-400 disabled:bg-slate-400">Check passcode</button></form> <img src="/splatter-web.jpg" alt="website explosion">`}`;
});
export {
  Page as default
};
