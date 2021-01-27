<template>
  <div>
    <!--调用contract-->
    <contract :name="'BR'"></contract>
  </div>
</template>

<script>
import Contract from "@/components/Contract/index";
export default {
  name: "Test1",
  components: {
    Contract
  }
}
</script>

<style scoped>

</style>
