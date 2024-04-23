<template>
  <div class="tooling">
    {{ $site.locales[$localePath].tooling.map }}
    <div></div>
  </div>
</template>

<script setup></script>

<style scoped>
.tooling {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
