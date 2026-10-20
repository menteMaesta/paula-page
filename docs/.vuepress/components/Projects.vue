<template>
  <section class="projects">
    <h2 class="title">{{ projects.title }}</h2>
    <article class="case" v-for="(item, index) in projects.items" :key="index">
      <div v-if="item.image" class="projectWrapper">
        <img :alt="item.alt" :class="item.image" />
      </div>
      <div class="body">
        <h3>
          <a v-if="item.href" :href="item.href" target="_blank">
            {{ item.name }} <i class="fa-solid fa-arrow-up-right-from-square" />
          </a>
          <span v-else>{{ item.name }}</span>
        </h3>
        <p class="context">{{ item.context }}</p>
        <dl>
          <dt>{{ projects.labels.problem }}</dt>
          <dd>{{ item.problem }}</dd>
          <dt>{{ projects.labels.built }}</dt>
          <dd>{{ item.built }}</dd>
          <dt>{{ projects.labels.result }}</dt>
          <dd>{{ item.result }}</dd>
        </dl>
        <ul class="stack">
          <li v-for="tech in item.stack" :key="tech">{{ tech }}</li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$site.locales[this.$localePath].projects;
    },
  },
};
</script>

<style scoped>
.projects {
  margin-top: 1rem;
}
.title {
  font-size: 1.3rem;
  border: none;
  margin-bottom: 1rem;
}
.case {
  margin-bottom: 2.5rem;
}
h3 {
  font-size: 1.1rem;
  margin: 1rem 0 0.2rem;
}
h3 a {
  color: #2c3e50;
}
h3 a i {
  font-size: 0.75rem;
}
.context {
  font-size: 0.85rem;
  color: #6a7c8e;
  margin: 0 0 0.6rem;
}
dl {
  margin: 0;
}
dt {
  font-weight: 600;
  font-size: 0.85rem;
  margin-top: 0.4rem;
}
dd {
  margin: 0;
  font-size: 0.95rem;
}
.stack {
  list-style: none;
  padding: 0;
  margin: 0.8rem 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.stack li {
  font-size: 0.8rem;
  padding: 0.1rem 0.5rem;
  border-radius: 0.2rem;
  background: #eef0f7;
}
.projectWrapper {
  display: flex;
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

.animatedIconsPic {
  max-width: 100% !important;
  content: url("../assets/animated-icons-phone.png");
}

@media (min-width: 640px) {
  .animatedIconsPic {
    content: url("../assets/animated-icons.png");
  }
}
</style>
