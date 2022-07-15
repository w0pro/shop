<template>
  <div>
    <form action="" class="form" >
      <ul class="input-list">
        <li v-for="item in paramInput" :key="item.id">
          <label :for="item.id">
            <div class="label">
              <p>{{item.label}}
              </p>
              <div v-if="item.iconLabel" class="icon-label">
              </div>
            </div>
            <input class="input" :type="item.type" :id="item.id"
                                v-model.trim="formFields[item.id]"
                               :style="{width:item.width, height:item.height,
                               marginBottom:item.marginB}"
                               :placeholder="item.placeholder"
                               :class="{error: item.error}">
          </label>
        </li>
        <button
          type="submit" class="btn-add" :class="{__active:toogle}"
          @click.prevent="addCard()">
          Добавить товар
        </button>
      </ul>
    </form>

  </div>

</template>

<script>

export default {
  name: 'ShopForm',

  data() {
    return {
      cards: [],
      paramInput: [
        {
          label: 'Наименование товара',
          id: 'name',
          width: '100%',
          marginB: '16px',
          placeholder: 'Введите наименование товара',
          iconLabel: true,
          error: false,
          type: 'text',
        },
        {
          label: 'Описание товара',
          id: 'info',
          width: '100%',
          height: '108px',
          marginB: '16px',
          placeholder: 'Введите описание товара',
          iconLabel: false,
          error: false,
          type: 'text',
        },
        {
          label: 'Ссылка на изображение товара',
          id: 'link',
          width: '100%',
          marginB: '16px',
          placeholder: 'Введите ссылку',
          iconLabel: true,
          error: false,
          type: 'text',
        },
        {
          label: 'Цена товара',
          id: 'cost',
          width: '100%',
          marginB: '24px',
          placeholder: 'Введите цену',
          iconLabel: true,
          error: false,
          type: 'number',
        },
      ],
      formFields: {
        name: '',
        info: '',
        link: '',
        cost: '',
      },
      toogle: false,
    };
  },
  watch: {
    formFields: {
      deep: true,
      handler(newVal) {
        this.checkInp(newVal);
      },
    },
  },
  methods: {
    // eslint-disable-next-line
    addCard() {
      const status = {};
      // eslint-disable-next-line
      for (let keyg in this.formFields) {
        if (this.formFields[keyg].length !== 0 || keyg === 'info') {
          status[keyg] = this.formFields[keyg];
        } else {
          this.paramInput.forEach((el, ind) => {
            if (el.id === keyg) {
              this.paramInput[ind].error = true;
            }
          });
        }
      }
      if (Object.keys(status).length === 4) {
        this.cards.push(status);
        // eslint-disable-next-line
        for (let field in this.formFields) {
          this.formFields[field] = '';
        }
      }
    },
    checkInp(newVal) {
      const res = new Set();
      // eslint-disable-next-line
      for (let inp in newVal) {
        if (newVal[inp].length !== 0 || inp === 'info') {
          // eslint-disable-next-line
          res.add(inp);
          // eslint-disable-next-line
          res.size === 4 ? this.toogle = true : this.toogle = false;
          // eslint-disable-next-line
          this.paramInput.forEach(el => el.id === inp ? el.error = false : '');
        }
      }
    },
  },
};
</script>

<style scoped lang="sass">
.form
  width: 332px
  height: 440px
  background-color: rgba(0, 0, 0, 0.02)
  padding: 24px

.label
  display: flex
  font-size: 10px
  font-weight: 400
  margin-bottom: 4px

.input-list li
  list-style: none

.input
  border-radius: 5px
  filter: drop-shadow(3px 2px 3px rgba(0, 0, 0, 0.1))
  padding: 10px 16px
  border: none
  outline: none

.input::placeholder
  color: #B4B4B4
  font-size: 12px
  font-weight: 400

.btn-add
  width: max-content
  padding: 11px 94px
  background-color: #EEEEEE
  border-radius: 10px
  filter: drop-shadow(3px 2px 3px rgba(0, 0, 0, 0.1))
  border: none
  font-weight: 600
  font-size: 12px
  color: #B4B4B4

.icon-label
  width: 4px
  height: 4px
  border-radius: 50px
  background-color: #FF8484

.error
  border: 1px solid #FF8484

.__active
  background-color: #7BAE73
  color: #FFFFFF
  cursor: pointer
</style>
