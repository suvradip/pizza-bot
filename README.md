# A simple pizza Bot

> His name is Johny, from Pizza store who helps you with your pizza order and track your existing any order.

[**Live Demo**](https://pizza-order-with-bot.herokuapp.com/)

## Build Setup is simple and straight forward

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## Technology

Ok, here I'm using couple things and listed it bellow.

-  Vuejs (for my frontend)
-  Nodejs (it's for my backend, mostly for API parts)
-  DialogFlow (Main heart of this application)
-  FirBase (to store data)

That's it.

## Project setup

You need to do couple things before start this application. Creation of private key files for dialogFlow & FireBase. For demo I'm using my credentials to access dialogFlow & FireBase API and i'm not sharing with this repository for security purpose. To get your own key file please follow the bellow steps.

**DialogFlow**

1. you need to create an account in dialogflow and export the agent as [zip](https://github.com/suvradip/pizza-bot/tree/master/projectAssets/dialogflow). Zip file is present under projectAssets folder.

2) Use this [guide](https://github.com/googleapis/nodejs-dialogflow#before-you-begin) to generate private key and other setup

3) place the private key file (rename it to dialogFlow.json) under keyFile folder.

**FireBase**

1. create a account in FirBase.
2. vising the account setting page -> project settings -> service accounts
3. Generate the key file and save it under keyFile folder (rename the file as firebase.json) in this project.

After doing all the steps your folder structure look like this
<img src="https://i.ibb.co/DR9nKCT/ss-1.png" alt="ss-1" border="0" />

Thats it. We are good to go to run this app now.

Screen shoots of this project can be found here https://github.com/suvradip/pizza-bot/tree/master/projectAssets/chat
