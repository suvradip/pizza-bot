const router = require('express').Router();
const uuid = require('uuid');
const dialogFlow = require('../service/dataflow');
const { Orders } = require('../service/firestore');
const { extractValue } = require('../util');
// router.get('/sessionId', (req, res) => {
//    const sessionId = uuid.v4();
//    res.json({
//       token: sessionId,
//    });
// });

router.post('/bot', async (req, res) => {
   const { body } = req;
   const { message, sessionId } = body;

   let id = sessionId;
   if (sessionId === '' || typeof sessionId === 'undefined') {
      id = uuid.v4();
   }

   console.log(id);

   const respond = await dialogFlow(message, id);

   if (sessionId && typeof sessionId !== 'undefined') {
      const data = extractValue(respond.output, respond.intent);
      if (data) {
         const [[key, value]] = Object.entries(data);
         const a = Orders.insertOrUpdate(sessionId, { [key]: value });
         console.log('insert', a);
      }
   }

   res.json({
      status: 'OK',
      message: respond,
      sessionId: id,
   });
});

module.exports = router;
