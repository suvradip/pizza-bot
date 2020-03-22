const router = require('express').Router();
const consola = require('consola');
const uuid = require('uuid');
const dialogFlow = require('../service/dialogflow');
const { Orders } = require('../service/firestore');
const { extractValue } = require('../util');

/* communication with message */
router.post('/bot', async (req, res) => {
   const { body } = req;
   const { message, sessionId } = body;

   let id = sessionId;
   if (sessionId === '' || typeof sessionId === 'undefined') {
      id = uuid.v4();
   }

   const respond = await dialogFlow(message, id);
   const data = extractValue(respond.output, respond.intent);
   try {
      if (sessionId && typeof sessionId !== 'undefined' && respond.intent !== 'get_order_status') {
         if (data) {
            const [[key, value]] = Object.entries(data);
            Orders.insertOrUpdate(sessionId, { [key]: value });
         }
      }
   } catch (error) {
      consola.error('Bad happened while updating the data in firebase');
      console.error(error);
   }

   res.json({
      message: {
         ...respond,
         output: data,
      },
      sessionId: id,
   });
});

/* will return all the orders */
router.get('/orders', async (req, res) => {
   const data = await Orders.findAll();
   res.json({
      data,
   });
});

router.get('/orders/:orderId', async (req, res) => {
   const { params } = req;
   const { orderId } = params;
   const DEFAULT_ERROR_MESSAGE = 'No records found. please check the given id once again.';
   if (typeof orderId === 'undefined') return res.json({ message: DEFAULT_ERROR_MESSAGE });

   const data = await Orders.findByField({ orderId });
   if (data) {
      return res.json({ message: data });
   }

   return res.json({ message: DEFAULT_ERROR_MESSAGE });
});

router.get('/tracking/:id', async (req, res) => {
   const { params } = req;
   const { id } = params;
   const DEFAULT_ERROR_MESSAGE = 'No records found. please check the given id once again.';
   if (typeof id === 'undefined') return res.json({ message: DEFAULT_ERROR_MESSAGE });

   const data = await Orders.findById(id);
   if (data) {
      return res.json({
         message: {
            orderId: data.orderId,
         },
      });
   }

   return res.json({ message: DEFAULT_ERROR_MESSAGE });
});

module.exports = router;
