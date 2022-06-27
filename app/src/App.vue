<template>
  <component :is="currentPageComponent" :page-params="currentPageParams" @goToPage="(pageName, pageId) => goToPage(pageName, pageId)" />
</template>

<script>
import MainPages from '@/pages/MainPages.vue';
import ProductPages from '@/pages/ProductPages.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = {
  main: 'MainPages',
  product: 'ProductPages'
}

export default {
    name: "App",
    components: { MainPages, ProductPages, NotFoundPage },
    data() {
        return {
          currentPage:'main',
          currentPageParams: {},
        };
    },
    methods: {
      goToPage(pageName, pageParams) {
        this.currentPage = pageName,
        this.currentPageParams = pageParams;
      }
    },
    computed: {
      currentPageComponent() {
        return routes[this.currentPage] || 'NotFoundPage';
      }, 
    },
};
</script>