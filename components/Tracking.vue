<template>
   <div class="wrapper">
      <div class="card">
         <div class="card-body">
            <h5 class="card-title" v-text="order.name" />
            <h6 class="card-subtitle mb-2 text-muted">You ordered a {{ order.pizzaName }} pizza</h6>
            <p class="card-text">Righ now we are cooking it and will be deliver to you shortly.</p>
            <p class="quantity">Quantity: <strong v-text="order.quantity" /></p>
            <p class="address" v-text="order.address" />
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Tracking',

   props: {
      order: {
         type: Object,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.wrapper {
   .card {
      background-color: #f0f0f0;
      border: 0;
      max-width: 22rem;
      display: inline-block;
      border-top-right-radius: 1.3em;
      border-bottom-left-radius: 1.3em;
      border-bottom-right-radius: 1.3em;

      .card-text {
         font-size: 13px;
      }

      .quantity,
      .address {
         margin-bottom: 5px;
         font-size: 14px;
      }
   }
}
</style>
