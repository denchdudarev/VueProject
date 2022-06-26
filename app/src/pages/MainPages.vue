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
      <ProductFilter :price-min.sync="filterPriceMin" :price-max.sync="filterPriceMax" :category-id.sync="filterCategory" />

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
import products from '@/data/products';
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';

export default {
  components: {ProductList, BasePagination, ProductFilter},
  data() {
    return {
      page: 1, //выбранная страница пагинации 
      perPage: 3, //количество товаров на странице
      filterPriceMin: 0, //минимальная цена по фильтру(цена "От")
      filterPriceMax: 0, //максимальная цена по фильтру(цена "До")
      filterCategory: 0, //ID выбранной категории товара
    }
  },
  computed: {
    //Вычисляемые свойства, определяющие массив товаров по фильтрам
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
    /*Вычисляемое свойство, определяющее массив товаров, 
    на основании обрезки первоначального массива через начальный индекс(выбранная страница пагинации)
     и конечный индекс(количество товаров на странице)*/
    products() {
      const offset = (this.page - 1) * this.perPage;
      return this.filterProduct.slice(offset, offset + this.perPage );
    },
    /*Вычисляемое свойство, определяющее количество товаров после фильтрации списка товаров*/
    count() {
      return this.filterProduct.length;
    }
  },
};
</script>