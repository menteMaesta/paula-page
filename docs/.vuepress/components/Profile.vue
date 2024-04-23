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
  display: flex;
  flex-direction: row;
  align-items: center;
}
.profilePic {
  width: 12rem;
}
p {
  width: 100%;
  font-size: 1.2rem;
  margin: 0.2rem;
}
span {
  font-weight: bold;
}

@media (max-width: 600px) {
  .profile {
    flex-direction: column;
  }
  .profilePic {
    width: 8rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>
