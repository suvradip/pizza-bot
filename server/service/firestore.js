const db = require('../config/firebase');

const ORDERS = 'orders';

const Orders = {
   findById: id => {
      const docRef = db.collection(ORDERS).doc(id);
      return docRef.get().then(orders => {
         if (orders.empty) return false;
         return orders.data();
      });
   },

   findByField: fields => {
      const docRef = db.collection(ORDERS);
      const [[key, value]] = Object.entries(fields);
      const query = docRef.where(key, '==', value);

      return query.get().then(orders => {
         if (orders.empty) return false;
         return orders.docs.map(doc => doc.data());
      });
   },

   insert: (ssId, { name = '', pizzaName = '', quantity = '', toppings = '', location = '' }) => {
      const docRef = db.collection(ORDERS).doc(ssId);
      return docRef.set({
         name,
         pizzaName,
         quantity,
         toppings,
         location,
      });
   },

   update: (id, fields) => {
      const docRef = db.collection(ORDERS).doc(id);
      return docRef.update(fields);
   },

   insertOrUpdate: async (id, fields) => {
      const data = await Orders.findById(id);
      if (!data) {
         return Orders.insert(id, fields);
      } else {
         Orders.update(id, fields);
      }
   },
};

module.exports = { Orders };
