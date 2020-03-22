<template>
   <div class="wrapper">
      <h1 class="mt-5 mb-5">Orders received by bot</h1>
      <div class="row">
         <div class="col-12">
            <div class="table-wrapper">
               <table class="table table-striped">
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>OrderId</th>
                        <th>Name</th>
                        <th>Pizza</th>
                        <th>Toppings</th>
                        <th>Quantity</th>
                        <th>Location</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="(item, index) in orders.data" :key="index">
                        <th scope="row" v-text="index + 1" />
                        <td><span v-text="item.orderId" /></td>
                        <td><span v-text="item.name" /></td>
                        <td><span v-text="item.pizzaName" /></td>
                        <td><span v-text="item.toppings.length > 0 && item.toppings.join(', ')" /></td>
                        <td><span v-text="item.quantity" /></td>
                        <td><span v-text="item.address" /></td>
                        <td><span v-text="formatDate(item.createdAt)" /></td>
                        <td><span v-text="formatDate(item.updatedAt)" /></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex';
import format from 'date-fns/format';

export default {
   name: 'Admin',

   async fetch({ store, params, error }) {
      try {
         await store.dispatch('FETCH_ORDERS');
      } catch (e) {
         error({ statusCode: 404 });
      }
   },

   computed: {
      ...mapState(['orders']),
   },

   methods: {
      formatDate(val) {
         const d = new Date(val);
         return format(d, 'dd/MM/yyyy HH:mm');
      },
   },
};
</script>

<style lang="scss" scoped>
.wrapper {
   padding: 10px;
   margin: 20px;
}
</style>
