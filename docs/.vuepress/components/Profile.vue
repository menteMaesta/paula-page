<template>
  <div class="profile">
    <img :src="profileImagePath" alt="Profile Image" class="profilePic" />
    <div>
      <p>
        {{ $site.locales[$localePath].introduction }}
        <span>{{ $site.locales[$localePath].profession }}</span>
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
  flex-direction: column;
  display: flex;
  align-items: center;
}
.profilePic {
  width: 8rem;
}
p {
  width: 100%;
  font-size: 1rem;
  margin: 0.2rem;
}
span {
  font-weight: bold;
}

@media (min-width: 640px) {
  .profile {
    flex-direction: row;
  }
  .profilePic {
    width: 12rem;
  }
  p {
    font-size: 1.2rem;
  }
}
</style>
