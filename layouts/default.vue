<template>
  <v-app>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import AppFooter from '@/components/Footer'

export default {
  components: {
    Navbar,
    AppFooter,
  },
}
</script>

<style></style>
