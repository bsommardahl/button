<template>
  <div>
    <h1>Generate Button</h1>
    <p>Url: <input v-model="url" /></p>
    <p>Method: <input v-model="method" /></p>
    <p>Label: <input v-model="label" /></p>
    <p>Style: <input v-model="style" /></p>
    <div v-if="url">
      <pre> {{ generatedUrl }} </pre>
      <p><a :href="generatedUrl">View</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    url: "",
    label: "",
    style: "",
    method: "GET",
  }),
  computed: {
    generatedUrl() {
      const { method, label, style, url } = this;
      const methodParam = method ? `method=${encodeURI(method)}&` : "";
      const labelParam = label ? `label=${encodeURI(label)}&` : "";
      const styleParam = style ? `style=${encodeURI(style)})&` : "";
      const urlParam = `url=${encodeURI(url)}`;

      const generated = `${window.location.href}button/?${methodParam}${labelParam}${styleParam}${urlParam}`;
      return generated;
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>
