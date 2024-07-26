<template>
  <b-navbar taggable="lg" type="light" variant="light" class="h-20 p-0">
    <b-navbar-brand href="/">
      <img src="../assets/img/CarCenterB.png" alt="logo" class="pl-10 h-10" />
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-collapse" />
    <b-navbar-nav class="ml-8 h-full">
      <b-nav-item
        class="w-32 text-center pt-5 text-xl text-black relative border-b-8 border-transparent hover:border-[#CD073C] hover:text-[#CD073C] active:border-[#CD073C] active:text-[#CD073C]"
        :class="{ 'border-[#CD073C]': $route.path === '/cars' }"
        to="/cars"
      >
        Cars
      </b-nav-item>
      <b-nav-item
        class="w-32 text-center pt-5 text-xl text-black relative border-b-8 border-transparent hover:border-[#CD073C] hover:text-[#CD073C] active:border-[#CD073C] active:text-[#CD073C]"
        :class="{ 'border-[#CD073C]': $route.path === '/shops' }"
        to="/shops"
      >
        Shops
      </b-nav-item>
      <b-nav-item
        class="w-32 text-center pt-5 text-xl text-black relative border-b-8 border-transparent hover:border-[#CD073C] hover:text-[#CD073C] active:border-[#CD073C] active:text-[#CD073C]"
        :class="{ 'border-[#CD073C]': $route.path === '/parts' }"
        to="/parts"
      >
        Parts
      </b-nav-item>
      <b-nav-item
        class="w-32 text-center pt-5 text-xl text-black relative border-b-8 border-transparent hover:border-[#CD073C] hover:text-[#CD073C] active:border-[#CD073C] active:text-[#CD073C]"
        :class="{ 'border-[#CD073C]': $route.path === '/help' }"
        to="/help"
      >
        Help
      </b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto d-none d-md-flex pr-8">
      <v-btn icon class="pr-12"
        ><v-icon size="32">mdi-cart-outline</v-icon></v-btn
      >
      <v-btn icon><v-icon size="32">mdi-account-circle-outline</v-icon></v-btn>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style scoped>
/* Optional: Add any custom styling here */
</style>
