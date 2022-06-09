<template>
  <div>
    <ProductList :products="products"/>

    <BasePagination :page="page" :count="count" :pre-page="prePage" />
  </div>

</template>

<script>
import products from './data/products'
import ProductList from './components/ProductList.vue'
import BasePagination from './components/BasePagination.vue';

export default {
  name: 'App',
  components: {ProductList, BasePagination},
  data() {
    return {
      page: 1,
      perPage: 3,
    }
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.perPage;
      return products.slice(offset, offset + this.perPage);
    },
    count() {
      return products.length;
    }
  }
};
</script>