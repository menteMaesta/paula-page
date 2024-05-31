<template>
  <div class="projects">
    <p class="title">{{ $site.locales[$localePath].projects.title }}</p>
    <a class="projectTitle" href="https://www.rechinido.com" target="_blank">
      <i class="fa-solid fa-link" />
      {{ $site.locales[$localePath].projects.donCalcetonProject }}
    </a>
    <div class="projectWrapper">
      <img
        :alt="$site.locales[$localePath].projects.altDonCalceton"
        class="calcetonPic"
      />
      <p>{{ $site.locales[$localePath].projects.personalizationStore }}</p>
    </div>
  </div>
</template>

<style scoped>
.projects {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}
.projectTitle {
  font-size: 1rem;
  font-weight: 600;
  margin: 1rem 0rem;
  text-align: start;
  width: 100%;
  cursor: pointer;
  color: #2c3e50;
}
.projectTitle:hover,
.projectTitle:active {
  text-decoration: underline;
  color: #406285;
}
.projectWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.calcetonPic {
  max-width: 100% !important;
  content: url("../assets/don-calceton-movil.png");
}

@media (min-width: 640px) {
  .calcetonPic {
    content: url("../assets/don-calceton.png");
  }
}
</style>
