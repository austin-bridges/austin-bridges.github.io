<script>
  
  /**
   * @typedef {Object} Props
   * @property {any} [workExperience] - Sample data, you can replace this with actual data import or fetch logic
   */

  /** @type {Props} */
  let { workExperience = [
    {
      title: "Web Developer",
      company: "CSM3K",
      dates: "December 2019 – December 2023",
      technologies: [
        "WordPress",
        "HTML",
        "CSS",
        "Git",
        "HubSpot",
        "Google Analytics",
        "SEMrush",
        "Adobe Suite (Photoshop, XD, Premiere, After Effects, Audition, Media Encoder)",
      ],
      responsibilities: [
        "Designed, developed, and maintained WordPress websites for various clients.",
        "Developed and implemented SEO strategies, leading to improvements in search engine visibility.",
        "Conducted website audits, identifying and resolving technical SEO issues.",
      ],
    },
    {
      title: "Web Developer",
      company: "CARE",
      dates: "January 2016 – December 2016",
      technologies: [
        "Meteor",
        "JavaScript",
        "HTML",
        "CSS",
        "Heroku",
        "Contentful",
        "Drupal",
        "MongoDB",
        "Ruby",
        "Git",
        "GitHub",
      ],
      responsibilities: [
        "Built a reactive JavaScript application integrated with the donation process for care.org.",
        "Integrated custom forms into the donation system and automated data publishing through APIs.",
        "Utilized Ruby to clean and extract data from legacy systems, improving data accessibility.",
      ],
    },
    {
      title: "Web Developer",
      company: "CARE",
      dates: "January 2013 – December 2014",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Ruby",
        "SOAP",
        "REST",
        "OAuth 2.0",
        "Webhooks",
      ],
      responsibilities: [
        "Migration and launch of an updated care.org website built on Drupal.",
        "Created responsive templates for a donation system, improving mobile user engagement.",
        "Developed a custom jQuery donation form integrated with Convio Luminate Extend API.",
      ],
    },
    {
      title: "Web Developer",
      company: "NBCUniversal / CNBC",
      dates: "January 2006 – December 2012",
      technologies: ["CMS", "HTML", "CSS", "JavaScript", "Agile Development"],
      responsibilities: [
        "Member of the editorial development team that helped launch CNBC.com in 2006.",
        "Developed JavaScript components, including a popular slideshow feature for CNBC.com.",
        "Agile development Co-Product Owner of a video content management system.",
      ],
    },
    {
      title: "Web Developer",
      company: "Melia Design Group",
      dates: "January 2003 – December 2006",
      technologies: ["HTML", "CSS", "JavaScript", "Flash", "PHP"],
      responsibilities: [
        "Developed custom HTML/CSS/JS templates for the in-house CMS Nimbus.",
        "Worked with programming and editorial teams to customize page templates for National Geographic Magazine.",
        "Created interactive Flash installations for the National Portrait Gallery.",
      ],
    },
    {
      title: "Web Developer",
      company: "CBS New Media",
      dates: "January 1997 – December 1999",
      technologies: ["HTML", "CSS"],
      responsibilities: [
        "Worked with a team to launch CBSNews.com, a co-branded TV news website.",
        "Developed promotional content for CBS TV shows on CBS.com.",
      ],
    },
  ] } = $props();

  
</script>

<svelte:head>
  <style>
    body {
      background-color: #0369a1;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%2338bdf8' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
    }
  </style>
</svelte:head>

<div class="container">
  <div class="group p-4">
    <h1 class="text-9xl font-roboto-slab text-sky-600 group-hover:text-sky-300 drop-shadow-xl">
      <a href="/" class="">Austin Bridges</a>
    </h1>
  </div>
  <div class="group p-4">
    <h2 class="text-7xl font-roboto-slab text-sky-600 group-hover:text-sky-300 drop-shadow-lg">
      Web Developer
    </h2>
    <div
      class="font-roboto px-4 children:py-4 bg-slate-200/60 hover:bg-slate-200/80 text-lg md:text-xl rounded-lg text-sky-700 transition duration-1000 ease-in-out"
    >
      <p class="text-2xl">
        Not every project fits neatly into a box. The fun starts when things get
        a little messy—when the road ahead isn’t paved, and the answers aren’t
        sitting in a manual somewhere. That’s where I thrive. I’m drawn to
        projects that don’t come with a playbook, the ones where figuring it out
        is half the job.
      </p>

      <p>
        Way back in 2006 at CNBC, launching the site wasn’t just about pushing
        pixels or following a blueprint. It meant creating something that could
        deliver breaking news without breaking a sweat, and doing it with a team
        that needed the tools yesterday. It was a constant balance of building
        what worked, tweaking what didn’t, and finding ways to make everything
        click together. Some of the best moments came from improvising
        solutions—like crafting a custom slideshow when the off-the-shelf
        options didn’t cut it.
      </p>

      <p>
        Then there was the time at CARE, where the challenge was to weave a new
        donation visualization into the existing flow of legacy systems. The goal: make it
        work, make it smooth, and make it fast. There was no guide for that—just
        a lot of building, testing, and refining until it fit. It meant
        dealing with evolving requirements and making quick adjustments without
        blowing the budget or the timeline. There’s something satisfying about
        building a solution where none existed before.
      </p>

      <p>
        I’m open to roles that don’t fit the standard web developer mold. Maybe
        it’s a position that needs someone who can bridge the gap between
        technical development and creative vision, or a project that’s still
        figuring out what it needs as it goes along. If the path isn’t clear and
        there’s room to experiment, I’m ready to jump in and find the way
        forward.
      </p>
      <p class="text-sky-900 text-sm">
        Authorized to work in the US for any employer.
      </p>
    </div>
  </div>

  <div class="group p-4 font-roboto">
    <h2 class="text-7xl font-roboto-slab text-sky-600 group-hover:text-sky-300 drop-shadow-lg">
      Experience
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sky-700"
    >
      {#each workExperience as job (job.title)}
        <div
          class="work-experience group p-4 bg-slate-200/60 hover:bg-slate-200/80 rounded-xl transition duration-1000 ease-in-out"
        >
          <div class="company text-3xl font-roboto-slab">
            {job.company}
          </div>
          <div><h3 class="text-sm">{job.title}</h3></div>
          <div class="dates text-sm leading-8">{job.dates}</div>
          <div class="technologies">
            <p class="text-sm">
              <span class="text-lg font-bold">Technologies:</span>
              {job.technologies.join(", ")}
            </p>
          </div>

          <ul class="list-disc list-outside m-4">
            {#each job.responsibilities as responsibility}
              <li>{responsibility}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>

  <div class="group p-4">
    <h2 class="text-7xl font-roboto-slab text-sky-600 group-hover:text-sky-300 drop-shadow-lg">
      Skills
    </h2>

    <div
      class="font-roboto p-4 bg-slate-200/60 hover:bg-slate-200/80 text-lg rounded-lg text-sky-700 transition duration-1000 ease-in-out"
    >
      <h3 class="text-3xl font-roboto-slab">Development & Programming</h3>
      <p class="">
        HTML, CSS, JavaScript, Ruby, Git, GitHub, APIs, REST, SOAP, JSON, XML, MongoDB,
        MySQL, Tailwind CSS, Bootstrap, Heroku, Svelte, Google Cloud Platform
      </p>
      <h3 class="text-3xl font-roboto-slab">Design & Front-End</h3>
      <p>
        Responsive Web Design, UI/UX Design, Wireframing, Adobe Suite (Photoshop, Illustrator, XD), Video Editing
      </p>
      <h3 class="text-3xl font-roboto-slab">SEO & Analytics</h3>
      <p>
        SEO, Google Tag Manager, Google Search Console, Content Development, Data Visualization
      </p>
      <h3 class="text-3xl font-roboto-slab">Specializations & Tools</h3>
      <p>
        Content Management Systems (CMS), Generative AI, Contentful, WordPress, Drupal, Agile/Scrum
      </p>
    </div>
  </div>
  <div class="group p-4 font-roboto">
    <h2 class="text-7xl font-roboto-slab text-sky-600 group-hover:text-sky-300 drop-shadow-lg">
      Contact Information
    </h2>
    <div
    class="font-roboto p-4 bg-slate-200/60 hover:bg-slate-200/80 text-lg rounded-lg text-sky-700 transition duration-1000 ease-in-out"
  >
      <p class="">
        My email address follows this pattern: <span class="hover:underline hover:text-sky-100">first.last@gmail.com</span>
  
        <a href="https://www.linkedin.com/in/austin-bridges-48343b4/" class="hover:underline hover:text-orange-600"
          >Linkedin</a
        >
        <a href="https://github.com/austin-bridges" class="hover:underline hover:text-orange-600">GitHub</a>
      </p>
    </div>
  </div>

</div>

