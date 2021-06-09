<template>
  <button class="btn btn-primary" :style="style" @click="clicked">
    {{ buttonLabel }}
  </button>
</template>

<script>
export default {
  props: {
    style: String,
    label: String,
    url: String,
  },
  methods: {
    clicked() {
      window.location = this.url;
    },
  },
  calculated: {
    buttonLabel() {
      return this.label || "Submit";
    },
  },
};
</script>

<style></style>
