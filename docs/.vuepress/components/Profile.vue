<template>
  <section class="profile">
    <img :src="profileImagePath" alt="" class="profilePic" />
    <div class="intro">
      <span class="status">{{ hero.status }}</span>
      <h1>{{ hero.headline }}</h1>
      <p class="pitch">{{ hero.pitch }}</p>
      <div class="actions">
        <a class="primary" :href="$withBase('/Paula_Gomez_Resume.pdf')" target="_blank">
          <i class="fa-solid fa-file-arrow-down" /> {{ hero.resume }}
        </a>
        <a
          v-for="(social, index) in $site.locales[$localePath].socials"
          :key="index"
          :href="social.href"
          target="_blank"
          :aria-label="social.name"
        >
          <i :class="social.icon" /> {{ social.name }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileImagePath from "@assets/pez.svg";
</script>

<script>
export default {
  computed: {
    hero() {
      return this.$site.locales[this.$localePath].hero;
    },
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0 2rem;
}
.profilePic {
  width: 8rem;
}
.status {
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.15rem 0.6rem;
  border-radius: 1rem;
  background: #e3f4ea;
  color: #1f6b3d;
}
.status::before {
  content: "● ";
}
h1 {
  font-size: 1.6rem;
  line-height: 1.3;
  margin: 0.6rem 0;
}
.pitch {
  font-size: 1rem;
  margin: 0 0 1rem;
  color: #3d4f61;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.actions a {
  font-size: 0.9rem;
  padding: 0.35rem 0.8rem;
  border: 1px solid #2b3252;
  border-radius: 0.3rem;
  color: #2b3252;
}
.actions a:hover {
  background: #eef0f7;
  text-decoration: none;
}
.actions a.primary {
  background: #2b3252;
  color: white;
}
@media (min-width: 640px) {
  .profile {
    flex-direction: row;
    align-items: flex-start;
  }
  .profilePic {
    width: 11rem;
  }
  h1 {
    font-size: 2rem;
  }
}
</style>
