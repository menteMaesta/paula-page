<template>
  <div class="profile">
    <img :src="profileImagePath" alt="Profile Image" class="profilePic" />
    <div>
      <p>
        <span>{{ $site.locales[$localePath].greeting }}</span
        >{{ $site.locales[$localePath].introduction }}
      </p>
      <p>{{ $site.locales[$localePath].about }}</p>
    </div>
  </div>
</template>

<script setup>
import profileImagePath from "@assets/pez.svg";
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.profilePic {
  width: 12rem;
}
p {
  width: 100%;
}
</style>
