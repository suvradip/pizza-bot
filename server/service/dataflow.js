const path = require('path');
const dialogflow = require('dialogflow');
// const uuid = require('uuid');

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
const KEY_FILE = path.resolve(__dirname, '..', '..', 'keyFile', 'key.json');
// const sessionId = uuid.v4();
const PROJECT_ID = 'pizza-ignsuf';

async function runSample(message, sessionId) {
   // Create a new session
   const sessionClient = new dialogflow.SessionsClient({
      keyFilename: KEY_FILE,
   });
   const sessionPath = sessionClient.sessionPath(PROJECT_ID, sessionId);

   // The text query request.
   const request = {
      session: sessionPath,
      queryInput: {
         text: {
            // The query to send to the dialogflow agent
            text: message,
            // The language used by the client (en-US)
            languageCode: 'en-US',
         },
      },
   };

   // Send request and log result
   const responses = await sessionClient.detectIntent(request);
   console.log('Detected intent');
   const result = responses[0].queryResult;

   //  responses.forEach(item => {
   //   const result = item.queryResult;
   //  });

   console.log(`  Query: ${result.queryText}`);
   console.log(`  Response: ${result.fulfillmentText}`);
   if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
   } else {
      console.log(`  No intent matched.`);
   }

   let [output] = result.outputContexts;
   if (output && typeof output.parameters !== 'undefined' && output.parameters !== null) {
      console.log('Output', JSON.stringify(output.parameters.fields, null, 4));
      output = output.parameters.fields;
   } else {
      output = '';
   }

   //  console.log(JSON.stringify(result, null, 4));
   console.log('------------------------');
   return {
      fulfillmentText: result.fulfillmentText,
      response: result.fulfillmentMessages.map(m => m.text.text.join(' ')),
      intent: result.intent.displayName,
      query: result.queryText,
      output,
   };
}

module.exports = runSample;
