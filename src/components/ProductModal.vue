<template>
  <fish-modal
    :title="title"
    marginTop="10em"
    :visible="visible"
    :width="width"
    @update:visible="this.onClose"
  >
    <fish-form class="product-card">
      <fish-field label="Name" labelWidth="35%" inline>
        <fish-input v-model="localName"></fish-input>
      </fish-field>
      <fish-field label="Category" labelWidth="35%" inline>
        <fish-select v-model="localCategory">
          <fish-option index="Каша" content="Каша"></fish-option>
          <fish-option index="Гарнир" content="Гарнир"></fish-option>
          <fish-option index="Овощи" content="Овощи"></fish-option>
          <fish-option index="Фрукты" content="Фрукты"></fish-option>
          <fish-option index="Сладкое" content="Сладкое"></fish-option>
        </fish-select>
      </fish-field>
      <fish-field label="Amount" labelWidth="35%" inline>
        <fish-input-number
          class="input-number"
          :min="0"
          :max="100000"
          v-model="localAmount"
        ></fish-input-number>
      </fish-field>
      <fish-field label="Calorie" labelWidth="35%" inline>
        <fish-input-number
          class="input-number"
          :min="0"
          :max="1000"
          v-model="localCalorie"
        ></fish-input-number>
      </fish-field>
      <fish-button class="save-btn" type="success" @click="onSave">Save</fish-button>
    </fish-form>
  </fish-modal>
</template>
<script>
export default {
  name: 'v-product-modal',
  props: {
    title: {
      type: String,
      default: 'Product card',
    },
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
    name: {
      type: String,
    },
    category: {
      type: String,
      validator(value) { // TODO: replace it with langs
        return ['Каша', 'Гарнир', 'Овощи', 'Фрукты', 'Сладкое'].indexOf(value) !== -1;
      },
    },
    amount: {
      type: Number,
    },
    calorie: {
      type: Number,
    },
  },
  data() {
    return {
      localName: this.name,
      localCategory: this.category,
      localAmount: this.amount,
      localCalorie: this.calorie,
    };
  },
  computed: {
    width() {
      const ww = window.innerWidth;

      return ww > 600 ? 600 : 0.9 * ww;
    },
  },
  methods: {
    onSave() {
      this.$emit('save', this.localName, this.localCategory, this.localAmount, this.localCalorie);
    },
    onClose() {
      this.$emit('close');
    },
  },
};
</script>
<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
}
.input-number {
  max-width: 25vw;
}
.save-btn {
  align-self: center;
}
</style>
