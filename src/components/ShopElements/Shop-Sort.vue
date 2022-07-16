<template>
  <div class="cards-box">
    <div class="btn-sort">
      <label for="select" class="label">
      <select id="select" class="select" v-model="selectCheck"
              @change="cardsSort(selectCheck)">
        <option :selected="selectCheck">По умолчанию</option>
        <option>По возрастанию цены</option>
        <option>По убыванию цены</option>
      </select>
      </label>
    </div>
    <shop-show :cards="cardsItem" v-on:deleteCard="deleteCard($event)"/>
  </div>
</template>

<script>
/* eslint-disable */
import ShopShow from '@/components/ShopElements/Shop-Show.vue';
import {updateLocal} from "@/components/mixins/updateLocal";

export default {
  name: 'ShopSort',
  /* eslint-disable */
  components: {ShopShow},
  mixins: [updateLocal],
  props: {
    cards: {
      type: Array,
    },
  },
  data() {
    return {
      selectCheck: 'По умолчанию',
      cardsItem: [],
    };
  },
  watch: {
    cards(newVal) {
      this.cardsItem = newVal
    }
  },
  methods: {
    cardsSort(param) {
      console.log(param);
      switch (param) {
        case 'По умолчанию':
          this.cardsItem = this.cardsItem.sort((prev, next) => {
            if (prev.name < next.name) return -1;
            if (prev.name > next.name) return 1;
          });
          break;
        case 'По возрастанию цены':
          this.cardsItem = this.cardsItem.sort((prev, next) => prev.cost - next.cost);
          break;
        case 'По убыванию цены':
          this.cardsItem = this.cardsItem.sort((prev, next) => next.cost - prev.cost);
          break;
        default:
      }
    },
    deleteCard(event) {
      this.$emit('deleteCard', event)
    }
  },
};
</script>

<style scoped lang="sass">
.cards-box
  width: 100%
  display: flex
  justify-content: flex-start
  flex-direction: column
  align-items: flex-end

@media (max-width: 768px)
  .cards-box
    align-items: flex-start
    margin-top: 16px

.btn-sort
  padding: 10px 0
  margin-bottom: 16px

.label
  padding: 10px 16px
  background: #FFFEFB
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)
  border-radius: 4px

.select
  font-size: 12px
  font-weight: 400
  color: #B4B4B4
  width: auto
  outline: none
  border: none

</style>
