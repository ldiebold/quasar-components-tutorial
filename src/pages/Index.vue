<template>
  <q-page class="flex flex-center">
    <q-btn
      color="red"
      push
      icon="flag"
      round
      size="xl"
      @click="$q.notify({
        message: 'Crushing it at quasar!',
        color: 'blue',
        position: 'center',
        icon: 'thumb_up'
      })"
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      name: ''
    }
  }
}
</script>
