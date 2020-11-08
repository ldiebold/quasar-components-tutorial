<template>
  <q-page padding>
    <q-page-sticky
      position="bottom-right"
      :offset="fabPosition"
    >
      <q-fab
        color="accent"
        icon="keyboard_arrow_up"
        direction="up"
        label="add"
        vertical-actions-align="right"
        label-position="left"
        :disable="draggingFab"
        v-touch-pan.prevent.mouse="moveFab"
      >
        <q-fab-action
          label="photo"
          icon="photo"
          color="blue"
          label-position="left"
          external-label
          label-class="bg-blue q-pa-sm"
          label-style="font-size: 1.4em;"
        />

        <q-fab-action
          label="video"
          icon="videocam"
          color="red"
          label-position="left"
          external-label
          label-class="bg-red q-pa-sm"
          label-style="font-size: 1.4em;"
        />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      fabPosition: [32, 32],

      draggingFab: false
    }
  },

  methods: {
    moveFab (event) {
      this.draggingFab = event.isFirst !== true && event.isFinal !== true

      this.fabPosition = [
        this.fabPosition[0] - event.delta.x,
        this.fabPosition[1] - event.delta.y
      ]
    }
  },

  computed: {
    hideLabel () {
      return this.$q.platform.is.mobile
    }
  }
}
</script>
