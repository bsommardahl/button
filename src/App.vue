<template>
  <Button :url="url" :style="style" :label="label" />
</template>

<script>
import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Button,
  },
  computed: {
    url() {
      return this.$route.query.url || "http://google.com";
    },
    label() {
      return this.$route.query.label;
    },
    style() {
      return this.$route.query.style;
    },
  },
};
</script>

<style></style>
