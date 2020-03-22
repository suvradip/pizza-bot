// const INTENTS = {
//   1: '1_welcome_pizza_store',
//   2: '2_pizza_order',
//   3: '2_pizza_order_fallback',
//   4: '3_pizza_toppings',
//   5: '3_pizza_toppings_fallback',
//   6: '4_pizza_quantity',
//   7: '4_pizza_quantity_fallback',
//   8: '5_pizza_user_name',
//   9: '5_pizza_user_name_fallback',
//   10: '6_pizza_user_info_address'
//   11: '6_pizza_user_info_address_fallback'

// }

const INTENTS = {
   // '1_welcome_pizza_store': '',
   '2_pizza_order': 'pizzaName',
   //  '2_pizza_order_fallback': '',
   '3_pizza_toppings': 'toppings',
   //  '3_pizza_toppings_fallback': '',
   '4_pizza_quantity': 'quantity',
   //  '4_pizza_quantity_fallback': '',
   '5_pizza_user_name': 'name',
   //  '5_pizza_user_name_fallback': '',
   '6_pizza_user_info_address': 'address',
   //  '6_pizza_user_info_address_fallback': '',
};

module.exports = {
   extractValue: (fields = '', intentName = '') => {
      if (fields === '' || typeof fields === 'undefined') return false;
      if (intentName === '' || typeof intentName === 'undefined') return false;

      if (Object.hasOwnProperty.call(INTENTS, intentName)) {
         const fieldsName = INTENTS[intentName];
         const field = fields[fieldsName];
         const { kind } = field;
         if (kind === 'listValue') {
            const items = field[kind];
            const values = items.values.map(a => {
               const _kind = a.kind;
               return a[_kind];
            });
            return { [fieldsName]: values };
         }
         return {
            [fieldsName]: field[field.kind],
         };
      }
   },
};
