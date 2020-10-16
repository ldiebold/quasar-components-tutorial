<template>
  <q-page padding>
    <q-carousel
      v-model="slide"
      navigation
      animated
      transition-next="slide-left"
      transition-prev="slide-right"
      height="200px"
      padding
      infinite
      control-type="push"
    >
      <!-- { active, btnProps, onClick } -->
      <template #navigation-icon="props">
        <q-btn
          flat
          round
          dense
          :icon="props.active ? 'check' : props.btnProps.icon"
          :color="props.active ? 'green' : 'white'"
          @click="props.onClick"
        />
      </template>

      <q-carousel-slide
        class="bg-indigo"
        name="1"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti quaerat odio numquam doloremque fugit modi unde suscipit dolor. Vel et, incidunt quia dolorem ratione a sed qui similique possimus.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti quaerat odio numquam doloremque fugit modi unde suscipit dolor. Vel et, incidunt quia dolorem ratione a sed qui similique possimus.
      </q-carousel-slide>
      <q-carousel-slide
        class="bg-blue"
        name="2"
      >
        Two
      </q-carousel-slide>
      <q-carousel-slide
        class="bg-orange"
        name="3"
      >
        Three
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: '1'
    }
  }
}
</script>
