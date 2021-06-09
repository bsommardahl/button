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
  data: () => ({
    url: "/",
    style: false,
    label: false,
  }),
  mounted() {
    console.log(this.$route);
    this.label = this.$route.query.label;
    this.style = this.$route.query.style;
    this.url = this.$route.query.url || "http://google.com";
  },
};
</script>

<style></style>
