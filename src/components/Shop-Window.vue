<template>
  <div class="shop-table">
      <shop-form v-on:transferCard="transferCard($event)"/>
      <shop-sort :cards="cards" v-on:deleteCard="deleteCard($event)"/>
  </div>

</template>

<script>
/* eslint-disable */
import ShopForm from '@/components/ShopElements/Shop-Form.vue';
import ShopSort from '@/components/ShopElements/Shop-Sort.vue';
import {updateLocal} from "@/components/mixins/updateLocal";

export default {
  name: 'ShopWindow',
  components: {ShopSort, ShopForm},
  mixins: [updateLocal],
  mounted() {
    if (localStorage.getItem('cards') !== null) {
      this.cards = JSON.parse(localStorage.getItem('cards'))
    }
  },
  data() {
    return {
      cards: [],
    }
  },
  methods: {
    transferCard(event) {
      this.cards.push(event)
      this.cards = this.cards.sort((prev, next) => {
        if (prev.name < next.name) return -1;
        if (prev.name > next.name) return 1;
      });
      this.updateLocal(this.cards)
    },
    deleteCard(event) {
      this.cards = this.cards.filter((el) => el.id !== event)
      this.updateLocal(this.cards)
    }
  },

}
</script>

<style scoped lang="sass">
.shop-table
  display: flex
  column-gap: 16px
  margin: 32px 32px 0

@media (max-width: 768px)
  .shop-table
    flex-direction: column
    align-items: center
</style>
