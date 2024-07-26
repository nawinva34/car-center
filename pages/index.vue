<template>
  <div class="bg-[#FFFFFF] h-full">
    <Hero />
    <v-container>
      <CardGrid />
      <div class="mt-[-220px]">
        <h1 class="thai-text text-3xl pb-4">อะไหล่รถยนต์</h1>
        <img src="../assets/img/Dbg4.png" class="rounded-3xl" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Hero from '@/components/Hero'
import CardGrid from '@/components/CardGrid'

export default {
  components: {
    Hero,
    CardGrid,
  },
}
</script>
