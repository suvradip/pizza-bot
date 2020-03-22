# A simple pizza Bot

> His name is Johny, from Pizza store who helps you with your pizza order and track your existing any order.

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

You need to do couple things before start this application.
Creation/generation of private key files for dialogFlow & FireBase. As it is using my credentials to access dialogFlow & FireBase, i'm not sharing with this repository for security purpose.

**DialogFlow**

1. you need to create an account in dialogflow and export the agent as zip. Zip file is present under projectAssets folder.

2. Use this (guide)[https://github.com/googleapis/nodejs-dialogflow#before-you-begin] to generate private key and other setup

3. place the private key file (rename it to dialogFlow.json) under keyFile folder.

**FireBase**

1. create a account in FirBase.
2. vising the account setting page -> project settings -> service accounts
3. Generate the key file and save it under keyFile folder (rename the file as firebase.json) in this project.

Thats it. We are good to go to run this app now.
