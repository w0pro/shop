/* eslint-disable */
export const updateLocal = {
  data() {
    return {
      cardsItem: []
    };
  },
  methods: {
    updateLocal(arg) {
      localStorage.setItem('cards', JSON.stringify(arg));
    },
  },
};
