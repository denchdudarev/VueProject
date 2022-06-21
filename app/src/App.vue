<template>

  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter v-model="filterCategory" :categories="categories"/>

        <div>
          <section class="catalog">
            <ProductList :products="products"/>

            <BasePagination v-model="page" :count="count" :per-page="perPage" />
          </section>
        </div>

    </div>
  </main>

</template>

<script>
import products from './data/products';
import categories from './data/categories';
import ProductList from './components/ProductList.vue';
import BasePagination from './components/BasePagination.vue';
import ProductFilter from './components/ProductFilter.vue';

export default {
  name: 'App',
  components: {ProductList, BasePagination, ProductFilter},
  data() {
    return {
      page: 1,
      perPage: 3,
      filterPriceMin: 0,
      filterPriceMax: 0,
      filterCategory: 0,
      categories,
    }
  },
  computed: {
    filterProduct() {
      let filterProduct = products;
       if (this.filterPriceMin > 0) {
          filterProduct = filterProduct.filter(product => product.price > this.filterPriceMin)
          }
       if (this.filterPriceMax) {
          filterProduct = filterProduct.filter(product => product.price < this.filterPriceMax || product.price == this.filterPriceMax)
          }
        if (this.filterCategory) {
          filterProduct = filterProduct.filter(product => product.categoryId === this.filterCategory)
          }
      return filterProduct;
    },
    products() {
      const offset = (this.page - 1) * this.perPage;
      return products.slice(offset, offset + this.perPage );
    },
    count() {
      return products.length;
    }
  },
};
</script>