const path = require('path');
const dialogflow = require('dialogflow');

const KEY_FILE = path.resolve(__dirname, '..', '..', 'keyFile', 'dialogflow.json');
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

   console.log(`  Query: ${result.queryText}`);
   console.log(`  Response: ${result.fulfillmentText}`);
   if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
   } else {
      console.log(`  No intent matched.`);
   }

   const output = Object.keys(result.parameters.fields).length > 0 ? result.parameters.fields : '';
   console.log('Output', JSON.stringify(output, null, 4));
   //  if (output && typeof output !== 'undefined' && output.parameters !== null) {
   //     console.log('Output', JSON.stringify(output.parameters.fields, null, 4));
   //     output = output.parameters.fields;
   //  } else {
   //     output = '';
   //  }

   console.log(JSON.stringify(result, null, 4));
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
