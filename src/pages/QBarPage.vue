<template>
  <q-page padding>
    <q-bar>
      <q-btn
        dense
        icon="lens"
        size="8.5px"
        round
        flat
        color="red"
      />

      <q-btn
        dense
        icon="lens"
        size="8.5px"
        round
        flat
        color="yellow"
      />

      <q-btn
        dense
        icon="lens"
        size="8.5px"
        round
        flat
        color="green"
      />

      <q-space />

      <q-icon name="wifi" />
    </q-bar>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      showDialog: false
    }
  }
}
</script>
