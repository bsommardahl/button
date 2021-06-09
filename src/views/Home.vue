<template>
  <Button :url="url" :style="style" :label="label" />
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    Button,
  },
};
</script>
