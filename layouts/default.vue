<template>
   <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-dark justify-content-between">
         <!-- <span class="navbar-brand mb-0 h1">Pizza Store</span> -->
         <nuxt-link to="/" class="navbar-brand mb-0 h1">Pizza Store</nuxt-link>

         <div class="nav">
            <nuxt-link class="nav-link" to="/">Bot</nuxt-link>
            <nuxt-link class="nav-link" to="/admin">Records</nuxt-link>
            <a class="nav-link" target="_blank" href="https://github.com/suvradip/pizza-bot"
               ><i class="fa fa-github"></i> GitHub</a
            >
         </div>
      </nav>
      <nuxt />
   </div>
</template>

<style lang="scss" scoped>
.container-fluid {
   padding: 0;
   margin: 0;

   .navbar-brand {
      color: #fff;
   }

   .nav {
      a {
         color: #fff;
         font-size: 14px;
      }
   }
}
</style>
