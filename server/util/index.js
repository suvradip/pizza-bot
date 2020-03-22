const INTENTS = {
   '2_pizza_order': 'pizzaName',
   '3_pizza_toppings': 'toppings',
   '4_pizza_quantity': 'quantity',
   '5_pizza_user_name': 'name',
   '6_pizza_user_info_address': 'address',
   get_order_status: 'trackingId',
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
