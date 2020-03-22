<template>
   <div class="container mt-5">
      <div class="title-wrpper">
         <h5>Johny</h5>
         <p class="led">from Pizza store</p>
      </div>

      <div class="card chat-box">
         <div class="card-body">
            <div ref="messages" class="messages">
               <Message data="Hello!" from="bot" />
               <!-- <PizzaMenu :action="OnPizzaSelect" /> -->
            </div>
            <form class="text-box form-inline" @submit.prevent="submitAction">
               <div class="form-group">
                  <input v-model.trim="message" type="text" class="inputBox form-control" />
               </div>
               <button class="btn btn-primary"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </form>
         </div>
      </div>
   </div>
</template>

<script>
import Vue from 'vue';

import Message from '../components/Message';
import PizzaMenu from '../components/PizzaMenu';

export default {
   name: 'BotPage',

   components: {
      Message,
      // PizzaMenu,
   },

   data() {
      return {
         message: '',
         sessionId: '',
      };
   },

   mounted() {
      this.UserComponent = Vue.extend(Message);
      this.PizzaMenuComponent = Vue.extend(PizzaMenu);
   },

   methods: {
      showUserMessage({ message, from }) {
         const messageBlock = this.$refs.messages;
         try {
            const instance = new this.UserComponent({
               propsData: { data: message, from },
            });
            instance.$mount();
            messageBlock.appendChild(instance.$el);

            /* update scroll position */
            messageBlock.scrollTop = messageBlock.scrollHeight - messageBlock.clientHeight;
         } catch (error) {
            console.error(error.message);
         }
      },

      async dataAction(message) {
         const { data } = await this.$axios.post('/bot', { message, sessionId: this.sessionId });
         console.log(data);
         this.sessionId = data.sessionId;
         data.message.response.forEach(res => {
            this.showUserMessage({ message: res, from: 'bot' });
         });

         this.extraTemplate(data.message.intent);
      },

      submitAction() {
         this.showUserMessage({ message: this.message, from: 'user' });
         this.dataAction(this.message);
         this.message = '';
      },

      extraTemplate(intentName) {
         if (intentName === '1_welcome_pizza_store') {
            this.showPizzaMenu();
         }
      },

      OnPizzaSelect(val) {
         console.log(val);
         this.showUserMessage({ message: val, from: 'user' });
         this.dataAction(val);
         this.menuInstance.$destroy(true);
         const m = document.querySelector('.pizza-menu-wrapper');
         m && m.remove();
      },

      showPizzaMenu() {
         try {
            this.menuInstance = new this.PizzaMenuComponent({
               propsData: { action: this.OnPizzaSelect },
            });
            this.menuInstance.$mount();
            this.$refs.messages.appendChild(this.menuInstance.$el);

            /* update scroll position */
            this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight - this.$refs.messages.clientHeight;
         } catch (error) {
            console.error(error.message);
         }
      },
   },
};
</script>

<style lang="scss" scoped>
.container {
   max-width: 35rem;
   margin: 0 auto;
   padding: 0;
   border: 1px solid #ccc;

   .title-wrpper {
      background-color: #f8f8f9;
      padding: 10px;
      border: 1px solid #eae7e7;

      h5 {
         margin: 0;
      }

      p {
         margin: 0;
         font-size: 13px;
      }
   }

   .chat-box {
      border: 0;
      border-radius: 0;

      .messages {
         height: 400px;
         overflow: auto;
      }

      .text-box {
         margin-top: 30px;
         .form-group {
            width: 28rem;
            .inputBox {
               width: 100%;
               min-height: 40px;
               height: 40px;
            }
         }

         button {
            margin-left: 10px;
            width: 50px;
            height: auto;
         }
      }
   }
}
</style>
