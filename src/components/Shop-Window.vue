<template>
  <div class="shop-table">
    <h1>Добавление товара</h1>
    <div>
      <shop-form />

    </div>
  </div>

</template>

<script>

import ShopForm from '@/components/ShopElements/Shop-Form.vue';

export default {
  name: 'ShopWindow',
  /* eslint-disable */
  components: {ShopForm},
};
</script>

<style scoped lang="sass">

h1
  padding: 32px 0 16px

.shop-table
  margin: 0 32px

</style>
