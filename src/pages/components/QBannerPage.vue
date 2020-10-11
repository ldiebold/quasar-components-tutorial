<template>
  <q-page padding>
    <q-banner
      inline-actions
      class="bg-blue text-white"
      rounded
      v-if="notification_bar"
      dark
    >
      <template v-slot:avatar>
        <q-avatar
          color="blue"
          text-color="white"
        >
          <q-icon name="wifi" />
        </q-avatar>
      </template>

      The wifi is disconnected

      <template v-slot:action>
        <q-btn
          label="turn on"
          flat
        />

        <q-btn
          label="dismiss"
          flat
          @click="notification_bar = false"
        />
      </template>
    </q-banner>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      notification_bar: true
    }
  }
}
</script>
