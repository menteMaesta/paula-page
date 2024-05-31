<template>
  <div>
    <GlobalLayout></GlobalLayout>
    <Connect />
  </div>
</template>

<script>
import GlobalLayout from "@vuepress/core/lib/client/components/GlobalLayout.vue";
import Connect from "../../components/Connect.vue";

export default {
  components: {
    GlobalLayout,
    Connect,
  },
};
</script>
