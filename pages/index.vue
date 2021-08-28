<template>
  <div>
    <div class="container">
      <div class="relative py-16 overflow-hidden bg-white">
        <div
          class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full"
        >
          <div
            class="relative h-full max-w-5xl mx-auto text-lg"
            aria-hidden="true"
          >
            <svg
              class="absolute transform translate-x-32 top-12 left-full"
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
              class="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
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
              class="absolute transform translate-x-32 bottom-12 left-full"
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
          <div class="max-w-5xl mx-auto text-lg">
            <h1>
              <span
                class="block text-base font-semibold tracking-wide text-center text-yellow-600 uppercase "
              >
                Yuurrific
              </span>
              <span
                class="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl"
              >
                A Humble Journey
              </span>
            </h1>
            <p class="mt-8 text-xl leading-8 text-gray-500">
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
          <div class="mx-auto mt-6 prose prose-lg text-gray-500 prose-yellow ">
            <p>
              This website is built with
              <a
                href="https://nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#2f495e]"
              >Nuxt<span class="text-[#00c58e]">JS</span></a>
              and
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-900"
              >TailwindCSS</a>.
            </p>
          </div>

          <div class="max-w-5xl mx-auto mt-6 prose prose-lg text-gray-500">
            <h2 class="capitalize">
              My Projects
            </h2>
            <div>
              <div
                v-for="(project, index) in projects"
                :key="`project-${index}`"
                class="mb-4"
              >
                <a
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ project.name }}
                </a>
                <badge v-if="project.status" :status="project.status">
                  {{ project.statusLabel }}
                </badge>
                - {{ project.description }}
              </div>
            </div>

            <h2 class="capitalize">
              My articles
            </h2>
            <div>
              <div
                v-for="(article, index) in articles"
                :key="`article-${index}`"
              >
                <a
                  :href="article.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ article.title }}
                </a>
                <div v-html="article.description" />
              </div>
            </div>

            <h2 class="capitalize">
              My toolkits
            </h2>
            <div v-for="(tool, index) in tools" :key="`tool-${index}`" class="mb-4">
              <a :href="tool.url">{{ tool.name }}</a> <badge v-for="(badge, bIndex) in tool.tags" :key="`badge-${bIndex}`">
                {{ badge }}
              </badge>
              <div>
                {{ tool.description }}
              </div>
              <div
                v-if="tool.perks"
                class="inline-block px-2 py-1 mb-0 mr-2 text-xs font-medium tracking-tight text-yellow-700 uppercase bg-yellow-100 rounded-md"
              >
                {{ tool.perks }}
              </div>
              <a :href="tool.url" class="js-learn-more" target="_blank">{{ tool.perks ? 'Get It' : 'Learn More' }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          name: 'OpenGraph',
          url: 'https://www.opengraph.xyz',
          description: 'Preview and generate open graph tags for your website'
        },
        {
          name: 'ByeIndonesia',
          url: 'https://www.byeindonesia.com/',
          description: 'Renunciation of Indonesian Citizenship Guide 2021'
        },
        {
          name: 'Clinic Geek',
          status: 'start',
          statusLabel: 'beta',
          url: 'https://www.clinicgeek.com',
          description: 'Clinic listing website in Singapore'
        },
        {
          name: 'HTMLTable',
          status: 'start',
          statusLabel: 'WIP',
          url: 'https://www.htmltable.xyz',
          description: 'FREE HTML table generator'
        },
        {
          name: 'Yuurrific',
          status: 'in-progress',
          statusLabel: 'In Progress',
          url: 'https://www.yuurrific.com',
          description: 'Personal website'
        }
      ],
      articles: [
        {
          title: '8 NuxtJS Plugins For Your Next Vue.js Project',
          description: `
            <p>NuxtJS is also a popular choice for Static Site Generation (SSG) or commonly known as JAMStack</p>
            <p>In this article, I’ll share with you 8 essential NuxtJS modules for your next NuxtJS project.</p>
          `,
          url: 'https://medium.com/p/8-nuxtjs-plugins-for-your-next-vue-js-project-de1d3da8b558',
          source: 'Medium'
        },
        {
          title: 'How to load Element UI dynamically with Nuxt JS',
          description: `
            <p>In this tutorial, I’m going to show how I load Element UI components individually and dynamically to make my website, OpenGraph, smaller and faster.</p>
          `,
          url: 'https://medium.com/p/how-to-load-element-ui-dynamically-with-nuxt-js-8e30e0168ee3',
          source: 'Medium'
        },
        {
          title: 'How to Build Fast Static Site with Nuxt.JS and Prismic',
          description: `
            <p>If you’re into JAMStack, chances are you’re already using a headless CMS on your project.</p>
            <p>This is a 2-part tutorial on how you could build a fast static site with Nuxt.js, Prismic, and Netlify.</p>
          `,
          url: 'https://medium.com/p/how-to-build-fast-static-site-with-nuxt-js-and-prismic-cd55fb179609',
          source: 'Medium'
        }
      ],
      tools: [
        {
          name: 'SimpleAnalytics',
          description: 'Simple, clean, and privacy-friendly analytics.',
          images: {
            default: '/c_scale,f_auto,q_auto,w_40/v1609748047/OpenGraph/simple-analytics.png',
            '2x': '/c_scale,f_auto,q_auto,w_80/v1609748047/OpenGraph/simple-analytics.png',
            '3x': '/c_scale,f_auto,q_auto,w_120/v1609748047/OpenGraph/simple-analytics.png'
          },
          url: '/get/simpleanalytics',
          tags: ['analytics', 'privacy'],
          perks: 'Get 1-month free'
        },
        {
          name: 'CopyAI',
          description: 'Create marketing copy in seconds with world\'s most advanced AI copywriter.',
          images: {
            default: '/c_scale,f_auto,q_auto,w_40/v1618994140/OpenGraph/copy-ai.png',
            '2x': '/c_scale,f_auto,q_auto,w_80/v1618994140/OpenGraph/copy-ai.png',
            '3x': '/c_scale,f_auto,q_auto,w_120/v1618994140/OpenGraph/copy-ai.png'
          },
          url: '/get/copyai',
          tags: ['copywriting', 'marketing'],
          perks: '40% off 1st year'
        },
        {
          name: 'Namecheap',
          description: 'Register cheap domain names from $0.99',
          images: {
            default: '/c_scale,f_auto,q_auto,w_40/v1629710557/OpenGraph/namecheap.png',
            '2x': '/c_scale,f_auto,q_auto,w_80/v1629710557/OpenGraph/namecheap.png',
            '3x': '/c_scale,f_auto,q_auto,w_120/v1629710557/OpenGraph/namecheap.png'
          },
          url: '/get/namecheap',
          tags: ['domain'],
          perks: '$5.95 for .COM - New customers only.'
        },
        {
          name: 'Toast.log',
          description: 'See errors, warnings, and logs as they happen on your site — without having to open the browser’s console.',
          images: {
            default: '/c_scale,f_auto,q_auto,w_40/v1618503031/OpenGraph/toast-log.png',
            '2x': '/c_scale,f_auto,q_auto,w_80/v1618503031/OpenGraph/toast-log.png',
            '3x': '/c_scale,f_auto,q_auto,w_120/v1618503031/OpenGraph/toast-log.png'
          },
          url: '/get/toastlog ',
          tags: ['devtools']
        },
        {
          name: 'CSS Scan Pro',
          description: 'Copy elements with a single click, or edit them without writing code.',
          images: {
            default: '/c_scale,f_auto,q_auto,w_40/v1618502874/OpenGraph/css-scan-pro.svg',
            '2x': '/c_scale,f_auto,q_auto,w_80/v1618502874/OpenGraph/css-scan-pro.svg',
            '3x': '/c_scale,f_auto,q_auto,w_120/v1618502874/OpenGraph/css-scan-pro.svg'
          },
          url: '/get/cssscanpro ',
          tags: ['devtools']
        }
      ],
      perks: [
        {
          name: 'SimpleAnalytics',
          description: 'Simple, clean, and privacy-friendly analytics.',
          images: {
            default: '/c_scale,f_auto,q_auto,w_40/v1609748047/OpenGraph/simple-analytics.png',
            '2x': '/c_scale,f_auto,q_auto,w_80/v1609748047/OpenGraph/simple-analytics.png',
            '3x': '/c_scale,f_auto,q_auto,w_120/v1609748047/OpenGraph/simple-analytics.png'
          },
          url: '/get/simpleanalytics',
          perks: 'Get 1-month free'
        },
        {
          name: 'CopyAI',
          description: 'Create marketing copy in seconds with world\'s most advanced AI copywriter.',
          images: {
            default: '/c_scale,f_auto,q_auto,w_40/v1618994140/OpenGraph/copy-ai.png',
            '2x': '/c_scale,f_auto,q_auto,w_80/v1618994140/OpenGraph/copy-ai.png',
            '3x': '/c_scale,f_auto,q_auto,w_120/v1618994140/OpenGraph/copy-ai.png'
          },
          url: '/get/copyai',
          perks: '40% off 1st year'
        },
        {
          name: 'NameCheap',
          description: 'Buy a domain and everything else you need',
          images: {
            default: '/c_scale,f_auto,q_auto,w_40/v1629710557/OpenGraph/namecheap.png',
            '2x': '/c_scale,f_auto,q_auto,w_80/v1629710557/OpenGraph/namecheap.png',
            '3x': '/c_scale,f_auto,q_auto,w_120/v1629710557/OpenGraph/namecheap.png'
          },
          url: '/get/namecheap',
          perks: '$5.95 for .COM - New customers only.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.profile {
  background-image: url('/yuyu.jpg');
  -webkit-background-clip: text;
}
.js-learn-more {
  @apply font-light #{!important};
  @apply text-yellow-700 #{!important};
}
</style>
