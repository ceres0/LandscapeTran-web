<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useLoadingBar } from 'naive-ui'
import { defineComponent } from 'vue'

defineComponent({
  setup() {
    const loadingBar = useLoadingBar()
    return {
      loadingBar
    }
  }
})
</script>

<template>
  <!-- <n-loading-bar-provider>
            <content />
          </n-loading-bar-provider> -->
  <header>
    <div>
      <!-- <nav>
          <RouterLink to="/">主页</RouterLink>
          <RouterLink to="/draw">创作</RouterLink>
          <RouterLink to="/community">社区</RouterLink>
        </nav> -->
    </div>
  </header>

  <RouterView />
  <n-back-top :right="100" />
</template>


<style scoped>
root {
  background-color: #f5f5dc;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
 

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
