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
        {{ tool.name }}
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
  justify-content: space-evenly;
}
.tool {
  margin-right: 1rem;
  border: 1px solid black;
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}
img {
  margin-right: 0.2rem;
  width: 1rem;
}
.icon {
  margin-right: 0.2rem;
  font-size: 1rem;
}
</style>
