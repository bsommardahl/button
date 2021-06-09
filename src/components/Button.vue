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
        this.error = true;
      }
    },
    reset() {
      this.working = false;
      this.done = false;
    },
  },
  computed: {},
};
</script>

<style></style>
