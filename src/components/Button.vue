<template>
  <div>
    <button
      class="btn btn-primary"
      :style="style"
      @click="clicked"
      :disabled="working || done"
    >
      {{ label }}
    </button>
    <p v-if="done">Done! (<a @click="reset">reset</a>)</p>
    <p class="error" v-if="error">Error: {{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    style: String,
    label: { type: String, default: "Submit" },
    url: String,
    method: { type: String, default: "GET" },
  },
  data: () => ({
    done: false,
    working: false,
    error: false,
  }),
  methods: {
    async clicked() {
      this.error = false;
      try {
        this.working = true;

        const requestOptions = {
          method: this.method,
        };

        const response = await fetch(this.url, requestOptions);

        if (response.status > 210 || response.status < 200)
          throw new Error(response);

        this.done = true;
      } catch (err) {
        console.log(err);
        this.error = err;
      }
    },
    reset() {
      this.working = false;
      this.done = false;
      this.error = false;
    },
  },
  computed: {},
};
</script>

<style>
.error {
  color: red;
  padding: 5px;
  background-color: pink;
  border: red solid 1px;
}
</style>
