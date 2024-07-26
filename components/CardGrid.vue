<template>
  <v-container>
    <v-row>
      <v-col v-for="card in cards" :key="card.title" cols="12" sm="6" md="4">
        <div class="rounded-3xl h-[320px] relative">
          <v-img :src="card.img" class="absolute top-[-150px]" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CardGrid',
  data() {
    return {
      cards: [
        {
          title: 'เลือกดูข้อมูลรถ',
          subtitle: 'Some subtitle',
          img: require('../assets/img/Dcar1.png'),
        },
        {
          title: 'ค้นหาร้านซ่อม',
          subtitle: 'Some subtitle',
          img: require('../assets/img/Dcar2.png'),
        },
        {
          title: 'ค้นหาร้านซ่อม',
          subtitle: 'Some subtitle',
          img: require('../assets/img/Dcar3.png'),
        },
      ],
    }
  },
}
</script>
