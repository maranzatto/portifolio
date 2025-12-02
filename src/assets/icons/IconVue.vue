<script lang="ts" setup>
import type { IconProps } from './IconsProps';

const { width, height, color } = withDefaults(defineProps<IconProps>(), {
  width: 24,
  height: 24,
  color: 'currentColor'
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 32 32" :fill="color">
    <path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883" />
    <path d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z" fill="#35495E" />
  </svg>
</template>
