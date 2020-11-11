<template>
  <q-page padding>
    <q-card
      class="q-mb-xl"
      style="max-width: 300px"
    >
      <q-card-section>
        <q-input
          v-model="text"
          label="Name"
          color="green"
          bottom-slots
          @input="logger"
          ref="input"
        >
          <template #loading>
            <q-spinner-pie color="green" />
          </template>
        </q-input>
      </q-card-section>
    </q-card>

    <q-card
      class="q-mb-xl"
      style="max-width: 300px"
    >
      <q-card-section>
        <q-select
          :options="['Lily', 'Panda', 'Moe']"
          hint="in mm please!"
          hide-hint
          hide-bottom-space
          v-model="text"
          clearable
          @input="logger"
        />
      </q-card-section>
    </q-card>

    <q-card
      class="q-mb-xl"
      style="max-width: 300px"
    >
      <q-card-section>
        <q-file
          v-model="file"
          readonly
        />
      </q-card-section>
    </q-card>

    <pre>{{ $data }}</pre>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      text: null,

      file: null
    }
  },

  mounted () {
    setTimeout(() => {
      this.$refs.input.blur()
    }, 4000)
  },

  methods: {
    logger (...params) {
      console.log(...params)
    }
  }
}
</script>
