<template>
            <li class="catalog__item">
              <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
                <img :src="product.img" alt="Название товара">
              </router-link>
  
              <h3 class="catalog__title">
                <router-link :to="{name: 'product', params: {id: product.id}}">
                  {{ product.title }}
                </router-link>
              </h3>
  
              <span class="catalog__price">
                {{ product.price }} ₽
              </span>
  
              <ul class="colors colors--black">
                <li class="colors__item">
                  <label class="colors__label">
                    <input class="colors__radio sr-only" v-model="color" type="radio" name="color-1" value="#73B6EA" checked="">
                    <span class="colors__value" style="background-color: #73B6EA;">
                    </span>
                  </label>
                </li>
                <li class="colors__item">
                  <label class="colors__label">
                    <input class="colors__radio sr-only" v-model="color" type="radio" name="color-1" value="#8BE000">
                    <span class="colors__value" style="background-color: #8BE000;">
                    </span>
                  </label>
                </li>
                <li class="colors__item">
                  <label class="colors__label">
                    <input class="colors__radio sr-only" v-model="color" type="radio" name="color-1" value="#222">
                    <span class="colors__value" style="background-color: #222;">
                    </span>
                  </label>
                </li>
              </ul>
            </li>
</template>
 
 <script>
 import eventBus from '@/eventBus';

export default {
    data() {
        return {
          color: "#73B6EA",
        }
      },
      methods: {
        gotoPage(pageName, pageParams) {
          eventBus.$emit('gotoPage', pageName, pageParams);
        }
      },
    props: ['product'],
};
</script>