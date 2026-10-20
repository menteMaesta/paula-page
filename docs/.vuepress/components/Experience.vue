<template>
  <div class="experience">
    <p class="title">{{ $site.locales[$localePath].experience.title }}</p>
    <div
      class="job"
      v-for="(job, index) in $site.locales[$localePath].experience.jobs"
      :key="index"
    >
      <p class="role">{{ job.role }} — {{ job.company }}</p>
      <p class="dates">{{ job.dates }}</p>
      <p class="highlight">{{ job.highlight }}</p>
    </div>
  </div>
</template>

<style scoped>
.experience {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}
.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}
.job {
  width: 100%;
  margin-top: 1rem;
}
.role {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}
.dates {
  font-size: 0.9rem;
  color: #6a7c8e;
  margin: 0.2rem 0;
}
.highlight {
  margin: 0;
  font-size: 0.95rem;
}
</style>
