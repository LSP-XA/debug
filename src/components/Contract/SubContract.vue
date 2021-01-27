<template>
  <div>
    <button @click="toggle">close</button>
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "SubContract",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created() {
    console.log("===========log=============", this.name);
  },
  methods: {
    toggle() {
      this.$store.commit("UPDATE_SHOWSUB", false);
      // this.$emit("close", false);
    }
  }
};
</script>

<style scoped>

</style>
