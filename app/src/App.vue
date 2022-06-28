<template>
  <component :is="currentPageComponent" :page-params="currentPageParams" />
</template>

<script>
import MainPages from '@/pages/MainPages.vue';
import ProductPages from '@/pages/ProductPages.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import eventBus from '@/eventBus';

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
      gotoPage(pageName, pageParams) {
        this.currentPage = pageName,
        this.currentPageParams = pageParams;
      }
    },
    computed: {
      currentPageComponent() {
        return routes[this.currentPage] || 'NotFoundPage';
      }, 
    },
    created() {
      eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams))
    },
};
</script>