<template>
<div>
  <button
    class="btn btn-primary"
    :style="style"
    @click="clicked"
    :disabled="working || done"
  >
    {{ buttonLabel }}
  </button>
  <p v-if="done" >Done! (<a href="#" @click="reset">reset</a>)</p>

  </div>
</template>

<script>
export default {
  props: {
    style: String,
    label: String,
    url: String,
  },
  data: () => ({
    done: false,
    working: false,
  }),
  methods: {
    clicked() {
      this.working = true;
      //window.location = this.url;
      
      const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Vue POST Request Example" })
  };
  fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
    .then(response => response.json())
    .then(data => (this.postId = data.id));
    
      this.done = true;
    },
    reset() {
      this.working = false;
      this.done = false;
    },
  },
  computed: {
    buttonLabel() {
      return this.label || "Submit";
    },
  },
};
</script>

<style></style>
