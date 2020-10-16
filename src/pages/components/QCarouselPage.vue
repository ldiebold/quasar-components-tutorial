<template>
  <q-page padding>
    <q-carousel
      animated
      v-model="slide"
      arrows
      infinite
      control-color="blue"
      height="150px"
    >
      <q-carousel-slide name="first">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi sint labore minima architecto, quas accusamus blanditiis sit. Obcaecati officia quibusdam sequi, minus dolores debitis libero porro praesentium quo tempore provident.
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        class="q-pa-none"
      >
        <q-scroll-area class="fit">
          <div class="q-carousel--padding">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi similique natus voluptates quos expedita hic omnis, aut necessitatibus officia pariatur placeat et, odio minus esse impedit itaque, enim quaerat. Obcaecati.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi similique natus voluptates quos expedita hic omnis, aut necessitatibus officia pariatur placeat et, odio minus esse impedit itaque, enim quaerat. Obcaecati.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi similique natus voluptates quos expedita hic omnis, aut necessitatibus officia pariatur placeat et, odio minus esse impedit itaque, enim quaerat. Obcaecati.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi similique natus voluptates quos expedita hic omnis, aut necessitatibus officia pariatur placeat et, odio minus esse impedit itaque, enim quaerat. Obcaecati.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi similique natus voluptates quos expedita hic omnis, aut necessitatibus officia pariatur placeat et, odio minus esse impedit itaque, enim quaerat. Obcaecati.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi similique natus voluptates quos expedita hic omnis, aut necessitatibus officia pariatur placeat et, odio minus esse impedit itaque, enim quaerat. Obcaecati.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi similique natus voluptates quos expedita hic omnis, aut necessitatibus officia pariatur placeat et, odio minus esse impedit itaque, enim quaerat. Obcaecati.
          </div>
        </q-scroll-area>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: 'first',

      fullscreen: false,

      autoplay: true,

      videos: [
        {
          name: 'first',
          src: 'https://player.vimeo.com/video/467849498'
        },
        {
          name: 'second',
          src: 'https://player.vimeo.com/video/461590874'
        },
        {
          name: 'third',
          src: 'https://player.vimeo.com/video/442915353'
        }
      ]
    }
  }
}
</script>
