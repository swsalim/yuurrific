<template>
  <div
    class="
      inline-block
      mx-2
      mb-0
      text-xs
      px-2
      py-1
      uppercase
      tracking-tight
      rounded-md
      font-medium
    "
    :class="classObject"
  >
    <slot>In Progress</slot>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    status: {
      type: String,
      default: 'in-progress',
    },
  },
  computed: {
    classObject() {
      return {
        'text-red-700': this.status.toLowerCase() === 'stop',
        'bg-red-100': this.status.toLowerCase() === 'stop',
        'text-green-700': this.status.toLowerCase() === 'start',
        'bg-green-100': this.status.toLowerCase() === 'start',
        'text-yellow-700': this.status.toLowerCase() === 'in-progress',
        'bg-yellow-100': this.status.toLowerCase() === 'in-progress',
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
