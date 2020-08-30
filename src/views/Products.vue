<template>
  <div class="products">
    <fish-table
      class="products-table"
      ref="table"
      :columns="columns"
      :data="items"
      :height="height"
    ></fish-table>
    <div class="buttons">
      <fish-button type="primary" @click="showCreateModal = true">
        <i class="fa fa-plus"></i>
        Add
      </fish-button>
    </div>
    <v-product-modal
      v-if="showSelectedProduct"
      :visible="showSelectedProduct"
      :name="selectedProduct.name"
      :category="selectedProduct.category"
      :amount="selectedProduct.amount"
      :calorie="selectedProduct.calorie"
      @save="update"
      @close="select"
    ></v-product-modal>
    <v-product-modal
      title="Add new product"
      :visible="showCreateModal"
      @save="create"
      @close="showCreateModal = false"
    ></v-product-modal>
  </div>
</template>
<script>
import ProductModal from '@/components/ProductModal';

export default {
  name: 'v-products',
  components: {
    'v-product-modal': ProductModal,
  },
  data() {
    return {
      height: 0,
      columns: [ // TODO: add sorting
        {
          title: 'Name',
          key: 'name',
        }, {
          title: 'Category',
          key: 'category',
        }, {
          title: 'Amount (g)',
          key: 'amount',
        }, {
          title: 'Calorie (100 g)',
          key: 'calorie',
        }, {
          title: 'Actions',
          key: 'action',
          render: (h, record) => {
            return h(
              'fish-button',
              {
                style: {
                  'box-shadow': 'none',
                },
                props: {
                  type: 'basic',
                  size: 'large',
                },
                nativeOn: {
                  click: () => this.select(record.id),
                },
              },
              [h('i', { class: 'fa fa-edit' })],
            );
          },
        },
      ],
      items: [
        { id: '1', name: 'Картофель', category: 'Гарнир', amount: 6000, calorie: 77 },
        { id: '2', name: 'Морковь', category: 'Овощи', amount: 1400, calorie: 35 },
        { id: '3', name: 'Огурец', category: 'Овощи', amount: 500, calorie: 14 },
        { id: '4', name: 'Салат листовой (зелень)', category: 'Овощи', amount: 400, calorie: 16 },
        { id: '5', name: 'Банан', category: 'Фрукты', amount: 750, calorie: 96 },
        { id: '6', name: 'Лимон', category: 'Фрукты', amount: 125, calorie: 34 },
        { id: '7', name: 'Крупа гречневая (продел)', category: 'Каша', amount: 3000, calorie: 300 },
        { id: '8', name: 'Крупа овсяная', category: 'Каша', amount: 2000, calorie: 342 },
        { id: '9', name: 'Макароны из муки 1 сорта', category: 'Гарнир', amount: 2000, calorie: 333 },
        { id: '10', name: 'Печенье сахарное', category: 'Сладкое', amount: 750, calorie: 417 },
      ],
      selectedProductId: undefined,
      showCreateModal: false,
    };
  },
  computed: {
    selectedProduct() {
      if (!this.selectedProductId) {
        return null;
      }

      const selectedProduct = this.items.find((i) => i.id === this.selectedProductId);

      if (!selectedProduct) {
        return null;
      }

      return selectedProduct;
    },
    showSelectedProduct() {
      return Boolean(this.selectedProductId);
    },
  },
  mounted() {
    this.height = this.$refs.table.$el.offsetHeight;
  },
  methods: {
    select(id) {
      this.selectedProductId = id;
    },
    create(name, category, amount, calorie) {
      console.log('add product', name, category, amount, calorie);
      this.showCreateModal = false;
    },
    update(name, category, amount, calorie) {
      console.log('update product', this.selectedProductId, name, category, amount, calorie);
    }
  },
};
</script>
<style scoped>
.products {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.products-table {
  height: 80%;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1em;
}
</style>
