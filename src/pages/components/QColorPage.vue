<template>
  <q-page padding>
    <q-input
      v-model="hex"
      :rules="[
        val => testIsColor(val) || 'please enter a valid date'
      ]"
    >
      <template #prepend>
        <q-avatar :style="`background-color: ${hex}`" />
      </template>

      <template #append>
        <q-icon
          class="cursor-pointer"
          name="colorize"
        >
          <q-popup-proxy>
            <q-color v-model="hex" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </q-page>
</template>

<script>
import { patterns } from 'quasar'

export default {
  methods: {
    handleSubmit (event) {
      const formData = new FormData(event.target)

      for (const [key, value] of formData.entries()) {
        console.log(key)
        console.log(value)
      }
    }
  },

  data () {
    return {
      hex: '#84ff80',
      hexa: '#94a4ff80',
      rgb: 'rgb(255, 100, 100)',
      rgba: 'rgba(255, 40, 40, 0.5)',
      testIsColor: patterns.testPattern.anyColor
    }
  }
}
</script>
