const db = require('../config/firebase');

const ORDERS = 'orders';

const Orders = {
   findAll: () => {
      const docRef = db.collection(ORDERS).orderBy('createdAt');

      return docRef.get().then(snapshot => {
         if (snapshot.empty) return false;
         const data = [];
         snapshot.forEach(doc => {
            data.push({
               id: doc.id,
               ...doc.data(),
               createdAt: doc._createTime.toDate(),
               updatedAt: doc._updateTime.toDate(),
            });
         });
         return data;
      });
   },

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

   insert: (ssId, { name = '', pizzaName = '', quantity = '', toppings = '', address = '' }) => {
      const orderId = `OD${Date.now()}`;
      const docRef = db.collection(ORDERS).doc(ssId);
      return docRef.set({
         orderId,
         name,
         pizzaName,
         quantity,
         toppings,
         address,
         createdAt: new Date(),
         updatedAt: new Date(),
      });
   },

   update: (id, fields) => {
      const docRef = db.collection(ORDERS).doc(id);
      return docRef.update({ ...fields, updatedAt: new Date() });
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
