<template>
  <div>
    <button @click="toggle">open</button>
    <template v-if="$store.state.showSub">
      <sub-contract :name="name" @close="toggle"></sub-contract>
    </template>
  </div>
</template>

<script>
import SubContract from "./SubContract";
export default {
  name: "index",
  components: {
    SubContract
  },
  props: {
    name: {
      type: String,
      default: "ALL"
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggle() {
      this.$store.commit("UPDATE_SHOWSUB", true);
      // this.show = val;
    }
  }
};
</script>

<style scoped></style>
