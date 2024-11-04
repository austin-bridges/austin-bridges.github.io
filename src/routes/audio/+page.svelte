<script lang="js">
  import * as Tone from "tone";  
  
  async function playMusic() {
    const synth = new Tone.Synth().toDestination();
    await Tone.start();
    const now = Tone.now();
    synth.triggerAttackRelease("174", "1n", now);
    synth.triggerAttackRelease("285", "1n", now + 0.5);
    synth.triggerAttackRelease("396", "1n", now + 1);
    synth.triggerAttackRelease("417", "1n", now + 1.5);
    synth.triggerAttackRelease("528", "1n", now + 2);
    synth.triggerAttackRelease("639", "1n", now + 2.5);
    synth.triggerAttackRelease("741", "1n", now + 3);
    synth.triggerAttackRelease("852", "1n", now + 3.5);
    synth.triggerAttackRelease("963", "1n", now + 4);
  }
  
</script>

<h1>Audio</h1>
<p class="text-7xl">Recordings on <a href="https://soundcloud.com/austin-bridges-133422285/tracks" class="underline hover:text-sky-400">Soundcloud</a>.</p>

<h2>Make Music</h2>
<div class="text-lg">msg:<span id="message"></span></div>
<button id="play-music" on:click={playMusic} class="px-2 py-1 bg-sky-200 hover:bg-sky-400 disabled:bg-slate-400">Play Music</button>