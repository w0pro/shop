<template>
  <div class="cards-wrapper">
    <ul>
      <transition-group name="list" tag="div">
      <li v-for="card in cards" :key="card.id">
        <button class="svg" @click="$emit('deleteCard', card.id)">
          <img src="/Group188.svg" alt="btn">
        </button>
          <div class="item__img">
            <img :src="card.link" :alt="card.name">
          </div>
          <div class="item__data">
            <div class="item__name">
              <h2>{{card.name}}</h2>
              <div class="item__info">
                <span>{{card.info}}</span>
              </div>
            </div>
            <div class="item__cost">
              <span>{{new Intl.NumberFormat('ru-RU').format(card.cost)}} руб.</span>
            </div>
          </div>
      </li>
      </transition-group>
    </ul>
  </div>

</template>

<script>
/* eslint-disable */

export default {
  name: 'Shop-Show',
  props: {
    cards: Array,
  },
};
</script>

<style scoped lang="sass">
.list-enter-active, .list-leave-active
  transition: all 0.3s

.list-enter, .list-leave-to
  opacity: 0
  transform: translateY(30px)

.list-leave-active
  position: absolute

.cards-wrapper
  width: 100%
  height: 100%

ul>div
  display: flex
  flex-wrap: wrap
  width: 100%
  gap: 16px

@media (max-width: 768px)
  ul>div
    justify-content: center

li
  transition: all 0.5s
  display: inline-block
  position: relative
  width: 332px
  height: 423px
  list-style: none
  background: #FFFEFB
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02)
  border-radius: 4px
  cursor: pointer

.item__img
  width: 332px
  height: 200px

.item__data
  height: 223px
  display: flex
  flex-direction: column
  justify-content: space-between
  padding: 16px 16px 24px 16px

.item__name h2
  font-size: 20px
  font-weight: 600
  line-height: 25px

.item__info
  font-size: 16px
  font-weight: 400
  line-height: 20px
  margin: 16px 0 32px
  height: 89px
  overflow: scroll

.item__info span
  word-wrap: break-word
.item__img img
  width: 100%
  height: 100%
  object-fit: cover
  border-radius: 4px 4px 0 0

.item__cost
  font-size: 24px
  font-weight: 600
  line-height: 30px

.svg
  position: absolute
  right: -8px
  top: -8px
  opacity: 0
  transition: opacity 0.5s linear
  border: none
  background-color: transparent
  cursor: pointer

li:hover .svg
  opacity: 1
  transition: opacity 0.5s linear
</style>
