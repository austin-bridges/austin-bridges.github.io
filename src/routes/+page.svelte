<script lang="ts">
	let answer = '';
  let show = false;
  let message = '';
  // let p = 'web developer';
  let p = 'decede552e3b598662aabe842fd6cad48cb885f4'
	async function handleSubmit() {
const hashBuffer = await window.crypto.subtle.digest("SHA-1", new TextEncoder().encode(answer));
const hashHex = Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
// message = hashHex;
    if (p === hashHex) {
      show = true;
    } else {
      message = "That is not the magic word. You can try again";
      answer = '';
    }
	}
  
</script>

<svelte:head>
  <style>
    body { background-color:#f5f5f5; }
  </style>
</svelte:head>




<h1 class="text-9xl font-bold font-fatface">
  Austin Bridges
</h1>
<p></p>
<p class="text-7xl">Recordings on <a href="https://soundcloud.com/austin-bridges-133422285/tracks" class="underline hover:text-sky-400">Soundcloud</a>.</p>
<!-- <a href="https://soundcloud.com/austin-bridges-133422285/tracks"  class="h-10 p-5 block text-sky-700 transition-colors duration-150 border border-sky-500 rounded-lg focus:shadow-outline hover:bg-sky-500 hover:text-sky-100">Tracks on Soundcloud</a> -->

<p class="text-7xl">Web Developer</p>
{#if show}
<p>Take a look at my <a href="/web-developer/" class="underline">web developer resume</a>.</p>
<!-- <a href="/web-developer" class="h-10 px-5 text-sky-700 transition-colors duration-150 border border-sky-500 rounded-lg focus:shadow-outline hover:bg-sky-500 hover:text-sky-100">Web Developer Experience</a> -->
<img src="/web-machine.jpg" alt="website machine" />
{:else}
  <p>{message}</p>
  <form on:submit|preventDefault={handleSubmit}>
    <span class="text-lg">Enter resume passcode:</span> 
    <input class="border border-sky-400 py-1" bind:value={answer} />
    <button disabled={!answer} type="submit" class="px-2 py-1 bg-sky-200 hover:bg-sky-400 disabled:bg-slate-400">
      Check resume passcode
    </button>
  </form>
  <img src="/splatter-web.jpg" alt="website explosion" />
{/if}
