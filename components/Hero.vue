<template>
  <div
    class="hero-background d-flex flex-column align-center justify-center m-0 w-full h-[600px]"
  >
    <img src="../assets/img/CarCenter.png" class="h-[100px]" />
    <h4 class="thai-text text-3xl text-white pt-12">บริการของทางเรา</h4>
    <b-btn
      variant="danger"
      class="mt-8 thai-text text-lg rounded-3xl text-white"
    >
      ค้นหาร้านซ่อมใกล้ฉัน
    </b-btn>
  </div>
</template>

<script>
export default {
  name: 'AppHero',
}
</script>

<style scoped>
.hero-background {
  background-image: url('~assets/img/bgimg.png');
  width: 100;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
