<template>
  <div class="connect">
    <p>{{ $site.locales[$localePath].connect }}</p>
    <a
      v-for="(social, index) in $site.locales[$localePath].socials"
      :key="index"
      :href="social.href"
      :target="social.href"
      :aria-label="social.name"
    >
      <i :class="social.icon" />
    </a>
  </div>
</template>

<script setup></script>

<style scoped>
.connect {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
p {
  font-size: 0.9rem;
  font-weight: normal;
  margin-right: 1rem;
}

a {
  margin-right: 1rem;
  padding: 0.2rem 0.5rem;
  background-color: #2b3252;
  border-radius: 100%;
  i {
    color: white;
  }
}
</style>
