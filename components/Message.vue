<template>
   <div class="message" :class="[{ user: isUser }, { bot: isBot }]">
      <div class="text-wrapper">
         <p v-text="data.toString()"></p>
      </div>
   </div>
</template>

<script>
export default {
   name: 'User',

   props: {
      data: {
         type: String,
         required: true,
      },

      from: {
         type: String,
         required: true,
      },
   },

   computed: {
      isUser() {
         return this.from === 'user';
      },

      isBot() {
         return this.from === 'bot';
      },
   },
};
</script>

<style lang="scss" scoped>
.message {
   display: flex;
   padding-right: 25px;
   margin: 15px 0;
   .text-wrapper {
      background-color: #f0f0f0;
      display: inline-block;
      p {
         padding: 7px 15px;
         margin: 0;
      }
   }

   &.bot {
      align-items: flex-end;
      padding-right: 25px;
      .text-wrapper {
         border-top-right-radius: 1.3em;
         border-bottom-left-radius: 1.3em;
         border-bottom-right-radius: 1.3em;
      }
   }

   &.user {
      justify-content: flex-end;
      align-items: flex-end;
      padding-left: 25px;
      .text-wrapper {
         background-color: #0084ff;
         color: #fff;

         border-bottom-left-radius: 1.3em;
         border-top-left-radius: 1.3em;
         border-bottom-right-radius: 1.3em;
      }
   }
}
</style>
