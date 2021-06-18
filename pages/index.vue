<template>
  <div class="container">
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          class="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            class="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            class="
              absolute
              top-1/2
              right-full
              transform
              -translate-y-1/2 -translate-x-32
            "
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="absolute bottom-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span
              class="
                block
                text-base text-center text-yellow-600
                font-semibold
                tracking-wide
                uppercase
              "
              >Yuurrific</span
            >
            <span
              class="
                mt-2
                block
                text-3xl text-center
                leading-8
                font-extrabold
                tracking-tight
                text-gray-900
                sm:text-4xl
              "
            >
              A Humble Journey
            </span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">
            Yuurrific.com is a personal website by Yuyu
            <a
              href="https://twitter.com/swSalim"
              target="_blank"
              rel="noopenner noreferrer"
            >
              <icon-twitter />
            </a>
          </p>
        </div>
        <div class="mt-6 prose prose-yellow prose-lg text-gray-500 mx-auto">
          <p>
            This website is built with
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#2f495e]"
              >Nuxt<span class="text-[#00c58e]">JS</span></a
            >
            and
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-900"
              >TailwindCSS</a
            >.
          </p>

          <h2>What I built</h2>
          <div>
            <div v-for="(project, index) in projects" :key="`project-${index}`">
              <a :href="project.url" target="_blank" rel="noopener noreferrer">
                {{ project.name }}
              </a>
              <badge v-if="project.status" :status="project.status">{{
                project.statusLabel
              }}</badge>
              - {{ project.description }}
            </div>
          </div>

          <h2>What I wrote</h2>
          <ul>
            <li v-for="(article, index) in articles" :key="`article-${index}`">
              <a :href="article.url" target="_blank" rel="noopener noreferrer">
                {{ article.title }}
              </a>
            </li>
          </ul>

          <h2>What I support</h2>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Yuurrific.com',
          status: 'in-progress',
          statusLabel: 'In Progress',
          url: 'https://www.yuurrific.com',
          description: 'Personal website',
        },
        {
          name: 'OpenGraph.xyz',
          url: 'https://www.opengraph.xyz',
          description: 'Preview and generate open graph tags for your website',
        },
        {
          name: 'ClinicGeek.com',
          status: 'start',
          statusLabel: 'beta',
          url: 'https://www.clinicgeek.com',
          description: 'Clinic listing website in Singapore',
        },
        {
          name: 'HTMLTable.xyz',
          status: 'start',
          statusLabel: 'WIP',
          url: 'https://www.htmltable.xyz',
          description: 'FREE HTML table generator',
        },
      ],
      articles: [
        {
          title: '8 NuxtJS Plugins For Your Next Vue.js Project',
          url: 'https://medium.com/p/8-nuxtjs-plugins-for-your-next-vue-js-project-de1d3da8b558',
          source: 'Medium',
        },
        {
          title: 'How to load Element UI dynamically with Nuxt JS',
          url: 'https://medium.com/p/how-to-load-element-ui-dynamically-with-nuxt-js-8e30e0168ee3',
          source: 'Medium',
        },
        {
          title: 'How to Build Fast Static Site with Nuxt.JS and Prismic',
          url: 'https://medium.com/p/how-to-build-fast-static-site-with-nuxt-js-and-prismic-cd55fb179609',
          source: 'Medium',
        },
      ],
    }
  },
}
</script>
