<template>
   <div class="pizza-menu-wrapper">
      <div v-for="(item, index) in menu" :key="index" class="card">
         <div class="card-body">
            <img class="card-img" :src="item.image" alt="" />

            <h6 class="card-title" v-text="item.name" />
            <p class="card-text" v-text="item.description" />
         </div>
         <div class="card-footer">
            <div class="text-center">
               <button class="btn btn-sm btn-info text-center" @click="onBtnAction(item.name)">SELECT</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'PizzaMenu',

   props: {
      action: {
         type: Function,
         required: true,
      },
   },

   data: () => ({
      menu: [
         {
            name: 'Margherita',
            description:
               'Black Olives, Onions, Crisp Capsicum, Mushroom, Fresh Tomato, Golden Corn, Jalapeno & Extra Cheese',
            image: '/images/veg-1.jpeg',
         },
         {
            name: 'Farm House',
            description: 'Onion, Tomato, Crisp Capsicum, Babycorn, Paneer & Jalapeno',
            image: '/images/veg-2.jpeg',
         },
         {
            name: 'Chicken Dominator',
            description:
               'Grilled Chicken rashers, Double barbeque chicken, Exotic Chicken Salami, Hot & Spicy Chicken & Italian sausages',
            image: '/images/nonveg-1.jpeg',
         },
         {
            name: 'Barbecue Chicken',
            description: 'Barbeque chicken, Italian chicken sausage & Jalapeno',
            image: '/images/nonveg-2.jpeg',
         },
      ],
   }),

   methods: {
      onBtnAction(val) {
         this.action(val);
      },
   },
};
</script>

<style lang="scss" scoped>
.pizza-menu-wrapper {
   .card {
      display: inline-block;
      margin: 0 5px;
      width: 10rem;
      .card-body {
         padding: 5px;
         .card-img {
            width: 100%;
            height: 100px;
         }

         .card-title {
            margin-top: 8px;
            margin-bottom: 10px;
         }

         .card-text {
            font-size: 12px;
         }
      }
   }
}
</style>
