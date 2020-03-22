const path = require('path');
const admin = require('firebase-admin');
const serviceAccount = path.resolve(__dirname, '..', '..', 'keyFile', 'firebase.json');

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
