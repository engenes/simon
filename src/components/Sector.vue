<template>
  <div class="sector" :style="{ background: color }">{{ index }}</div>
</template>

<script>
export default {
  name: 'Sector',
  props: {
    index: {
      required: true,
      type: Number,
    },
    color: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">

.sector {
  display: block;
  position: absolute;
  width: 50%;
  height: 50%;
  opacity: .6;
}
</style>