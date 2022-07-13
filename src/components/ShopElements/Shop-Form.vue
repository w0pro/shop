<template>
  <div>
    <form action="" class="form" >
      <ul class="input-list">
        <li v-for="item in paramInput" :key="item.id">
          <label :for="item.id" class="placeholder">
            <input class="input" type="text" :id="item.id"
                                v-model="formFields[item.id]"
                               :style="{width:item.width, height:item.height,
                               marginBottom:item.marginB}"
                               :placeholder="item.placeholder">
          </label>
        </li>
        <button class="btn-add">Добавить товар</button>
      </ul>
    </form>

  </div>

</template>

<script>

export default {
  name: 'ShopForm',

  data() {
    return {
      paramInput: [
        {
          placeholder: 'Наименование товара',
          id: 'name',
          width: '100%',
          marginB: '33px',
        },
        {
          placeholder: 'Описание товара',
          id: 'info',
          width: '100%',
          height: '108px',
          marginB: '33px',
        },
        {
          placeholder: 'Ссылка на изображение товара',
          id: 'link',
          width: '100%',
          marginB: '33px',
        },
        {
          placeholder: 'Цена товара',
          id: 'cost',
          width: '100%',
          marginB: '24px',
        },
      ],
      formFields: {
        name: '',
        info: '',
        link: '',
        cost: '',
      },
    };
  },
};
</script>

<style scoped lang="sass">
.form
  width: 332px
  height: 440px
  background-color: rgba(0, 0, 0, 0.02)
  padding: 24px

.input-list li
  list-style: none

.input
  border-radius: 5px
  filter: drop-shadow(3px 2px 3px rgba(0, 0, 0, 0.1))
  padding: 10px 16px
  border: none
  outline: none

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder
  transform: translateY(-30px) translateX(10px) scale(0.75)

.input:not(:placeholder-shown) ~ .placeholder
  color: #808097

.input:focus ~ .placeholder
  color: #dc2f55

.placeholder

  transition: transform 200ms, color 200ms

.input::placeholder
  color: #B4B4B4

.btn-add
  width: max-content
  padding: 10px 95px
  background-color: #EEEEEE
  border-radius: 10px
  filter: drop-shadow(3px 2px 3px rgba(0, 0, 0, 0.1))
  border: none

</style>
