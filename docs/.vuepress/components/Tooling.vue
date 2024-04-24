<template>
  <div class="toolingSection">
    <p class="toolingTitle">{{ $site.locales[$localePath].tooling }}</p>
    <div class="tools">
      <div
        class="tool"
        v-for="(tool, index) in $site.locales[$localePath].tools"
        :key="index"
      >
        <i v-if="tool.icon" :class="[tool.icon, 'icon']" />
        <img v-else :src="iconMap[tool.src]" alt="Tool Icon" />
        <p>{{ tool.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import tailwindIcon from "@assets/tailwind-icon.svg";
import adonisIcon from "@assets/adonis-icon.svg";
import copilotIcon from "@assets/copilot-icon.svg";
import tsIcon from "@assets/ts-icon.svg";

const iconMap = {
  tailwind: tailwindIcon,
  adonis: adonisIcon,
  copilot: copilotIcon,
  ts: tsIcon,
};
</script>

<style scoped>
.toolingSection {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.toolingTitle {
  font-size: 1.2rem;
  font-weight: bold;
}
.tools {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 40rem;
}
.tool {
  display: flex;
  position: relative;
  align-items: center;

  border: 1px solid black;
  border-radius: 0.2rem;

  padding: 0.2rem 0.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  p {
    margin: 0 0 0 1.4rem;
  }

  .icon,
  img {
    position: absolute;
    left: 0.5rem;
    top: auto;
    font-size: 1rem;
    width: 1rem;
  }
}
</style>
