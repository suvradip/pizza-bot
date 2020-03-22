<template>
   <div class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-dark justify-content-between">
         <!-- <span class="navbar-brand mb-0 h1">Pizza Store</span> -->
         <nuxt-link to="/" class="navbar-brand mb-0 h1">Pizza Store</nuxt-link>

         <ul class="navbar-nav">
            <li class="nav-item active">
               <nuxt-link class="nav-link" to="/">Bot</nuxt-link>
            </li>
            <li class="nav-item">
               <nuxt-link class="nav-link" to="/admin">Records</nuxt-link>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>
            </li>
         </ul>
      </nav>
      <nuxt />
   </div>
</template>

<style lang="scss" scoped>
.container-fluid {
   padding: 0;
   margin: 0;

   .navbar {
      color: #fff;
   }

   .navbar-brand {
      color: #fff;
   }

   .navbar-nav {
      a {
         color: #fff;
         font-size: 14px;
      }
   }
}
</style>
