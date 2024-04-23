<template>
  <div class="connect">
    <p>{{ $site.locales[$localePath].connect }}</p>
    <div class="socials">
      <a
        v-for="(social, index) in $site.locales[$localePath].socials"
        :key="index"
        :href="social.href"
        :target="social.href"
      >
        <i :class="social.icon" />
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.connect {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  font-size: 1.2rem;
  font-weight: bold;
}
.socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
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
