<template>
  <Button :url="url" :style="style" :label="label" :method="method" />
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    Button,
  },
  computed: {
    url() {
      return this.$route.query.url;
    },
    style() {
      return this.$route.query.style;
    },
    label() {
      return this.$route.query.label;
    },
    method() {
      return this.$route.query.method;
    },
  },
};
</script>
